provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "website" {
  bucket = "tyleradurham.com"
}

resource "aws_s3_bucket_policy" "website_policy" {
  bucket = "aws_s3_bucket.website.id"
  policy = jsondecode({
    version : "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket_website.arn}"
      }
    ]
  })
}

# resource "aws_cloudfront_distribution" "site_cdn" {
#   origin {
#     domain_name = aws_s3_bucket.website.bucket_regional_domain_name
#     origin_id   = "s3-website"
#   }
# }
