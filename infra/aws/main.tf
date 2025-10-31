resource "aws_ecr_repository" "service" {
  name   = var.ecr_repo_name
  region = var.aws_region
  encryption_configuration {
    encryption_type = "KMS"
    kms_key         = var.kms_key_arn
  }
}

resource "aws_s3_bucket" "website" {
  bucket = var.s3_bucket
  region = var.aws_region
  tags = {
    Name = "site bucket"
  }
}

resource "aws_cloudfront_distribution" "main" {
  enabled = true
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "${var.s3_bucket}.s3.${var.aws_region}.amazonaws.com"
    viewer_protocol_policy = "redirect-to-https"
  }
  origin {
    domain_name = "${var.s3_bucket}.s3.${var.aws_region}.amazonaws.com"
    origin_id   = "${var.s3_bucket}.s3.${var.aws_region}.amazonaws.com"
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn = var.acm_certificate_arn
  }
}

resource "aws_route53_record" "route" {
  name    = var.s3_bucket
  type    = "A"
  zone_id = var.route53_zone_id
  alias {
    evaluate_target_health = false
    name                   = var.aws_cloudfront_distribution
    zone_id                = var.cloudfront_zone_id
  }
}
