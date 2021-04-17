resource "aws_s3_bucket" "website" {
  bucket = "is590r"
  acl = "public-read"

  tags {
    Name = "Website"
    Environment = "production"
  }

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET","DELETE","PUT","POST"]
    allowed_origins = ["*"]
    expose_headers = ["ETag"]
    max_age_seconds = 3000
  }

  policy = <<EOF
{
  "Version": "2008-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::is590r/*"
    }
  ]
}
EOF

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

# AWS S3 bucket for www-redirect
resource "aws_s3_bucket" "website_redirect" {
  bucket = "www.is590r"
  acl = "public-read"

  website {
    redirect_all_requests_to = "is590r"
  }
}