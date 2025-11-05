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
  aliases             = ["tyleradurham.com", "www.tyleradurham.com"]
  default_root_object = "index.html"
  enabled             = true
  default_cache_behavior {
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    target_origin_id       = "${var.s3_bucket}.s3.${var.aws_region}.amazonaws.com"
    viewer_protocol_policy = "redirect-to-https"
    cache_policy_id        = "658327ea-f89d-4fab-a63d-7e88639e58f6"
  }
  origin {
    connection_attempts         = 3
    connection_timeout          = 10
    domain_name                 = "${var.s3_bucket}.s3.${var.aws_region}.amazonaws.com"
    origin_access_control_id    = "ELJIT8I7KXNE6"
    origin_id                   = "${var.s3_bucket}.s3.${var.aws_region}.amazonaws.com"
    origin_path                 = null
    response_completion_timeout = 0
  }
  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = var.acm_certificate_arn
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2021"
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
