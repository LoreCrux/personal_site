variable "aws_region" {
  type    = string
  default = "us-west-2"
}
variable "s3_bucket" {
  type      = string
  sensitive = true
}
variable "domain_name" {
  type      = string
  sensitive = true
}
variable "route53_zone_id" {
  description = "Route 53 Zone ID"
  type        = string
  sensitive   = true
}
variable "kms_key_arn" {
  description = "Container Registry ARN"
  type        = string
  sensitive   = true
}
variable "acm_certificate_arn" {
  description = "CloudFront ARN"
  type        = string
  sensitive   = true
}
variable "aws_cloudfront_distribution" {
  description = "CloudFront Distribution"
  type        = string
  sensitive   = true
}
variable "cloudfront_zone_id" {
  description = "CloudFront Zone ID"
  type        = string
  sensitive   = true
}
variable "ecr_repo_name" {
  description = "ECR Repo Name"
  type        = string
  sensitive   = true
}
