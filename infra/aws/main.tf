import {
  to = aws_s3_bucket.website
  id = "tyleradurham.com"
}
import {
  to = aws_cloudfront_distribution.main
  id = "E1G4LZFBVN7SI5"
}
import {
  to = aws_ecr_repository.service
  id = "tylerdurham/personal_site"
}
import {
  to = aws_route53_record.route
  identity = {
    zone_id = "Z10370632UYUL6QAQUMWF"
    name    = "tyleradurham.com"
    type    = "A"
  }
}

resource "aws_ecr_repository" "service" {
  force_delete         = null
  image_tag_mutability = "MUTABLE"
  name                 = "tylerdurham/personal_site"
  region               = "us-west-2"
  tags                 = {}
  tags_all             = {}
  encryption_configuration {
    encryption_type = "KMS"
    kms_key         = "arn:aws:kms:us-west-2:879117612842:key/a04047d6-ab23-4b5f-bd72-00270cb13396"
  }
  image_scanning_configuration {
    scan_on_push = false
  }
}

resource "aws_s3_bucket" "website" {
  bucket = var.bucket_name
  region = var.aws_region
  tags = {
    Name = "site bucket"
  }
}
resource "aws_cloudfront_distribution" "main" {
  aliases                         = ["tyleradurham.com", "www.tyleradurham.com"]
  anycast_ip_list_id              = null
  comment                         = null
  continuous_deployment_policy_id = null
  default_root_object             = "index.html"
  enabled                         = true
  http_version                    = "http2"
  is_ipv6_enabled                 = true
  price_class                     = "PriceClass_All"
  retain_on_delete                = false
  staging                         = false
  tags                            = {}
  tags_all                        = {}
  wait_for_deployment             = true
  web_acl_id                      = null
  default_cache_behavior {
    allowed_methods            = ["GET", "HEAD"]
    cache_policy_id            = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    cached_methods             = ["GET", "HEAD"]
    compress                   = true
    default_ttl                = 0
    field_level_encryption_id  = null
    max_ttl                    = 0
    min_ttl                    = 0
    origin_request_policy_id   = null
    realtime_log_config_arn    = null
    response_headers_policy_id = null
    smooth_streaming           = false
    target_origin_id           = "tyleradurham.com.s3.us-west-2.amazonaws.com"
    trusted_key_groups         = []
    trusted_signers            = []
    viewer_protocol_policy     = "redirect-to-https"
    grpc_config {
      enabled = false
    }
  }
  origin {
    connection_attempts         = 3
    connection_timeout          = 10
    domain_name                 = "tyleradurham.com.s3.us-west-2.amazonaws.com"
    origin_access_control_id    = "ELJIT8I7KXNE6"
    origin_id                   = "tyleradurham.com.s3.us-west-2.amazonaws.com"
    origin_path                 = null
    response_completion_timeout = 0
  }
  restrictions {
    geo_restriction {
      locations        = []
      restriction_type = "none"
    }
  }
  viewer_certificate {
    acm_certificate_arn            = "arn:aws:acm:us-east-1:879117612842:certificate/63c11b16-a828-480a-91e8-bf8c81d71ce5"
    cloudfront_default_certificate = false
    iam_certificate_id             = null
    minimum_protocol_version       = "TLSv1.2_2021"
    ssl_support_method             = "sni-only"
  }
}
resource "aws_route53_record" "route" {
  allow_overwrite = null
  health_check_id = null
  name            = "tyleradurham.com"
  type            = "A"
  zone_id         = "Z10370632UYUL6QAQUMWF"
  alias {
    evaluate_target_health = false
    name                   = "d3f9bq3ymnar6n.cloudfront.net"
    zone_id                = "Z2FDTNDATAQYW2"
  }
}
