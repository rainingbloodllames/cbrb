$body1 = @{ type = "A"; name = ""; value = "216.198.79.1" } | ConvertTo-Json
$body2 = @{ type = "A"; name = ""; value = "64.29.17.1" } | ConvertTo-Json
$body3 = @{ type = "CNAME"; name = "www"; value = "0f57f7180096c02c.vercel-dns-017.com" } | ConvertTo-Json
Set-Content -Path "dns-a1.json" -Value $body1 -NoNewline
Set-Content -Path "dns-a2.json" -Value $body2 -NoNewline
Set-Content -Path "dns-www.json" -Value $body3 -NoNewline
vercel api /v2/domains/cbrb.cl/records --method POST --input dns-a1.json 2>&1 | Out-String
vercel api /v2/domains/cbrb.cl/records --method POST --input dns-a2.json 2>&1 | Out-String
vercel api /v2/domains/cbrb.cl/records --method POST --input dns-www.json 2>&1 | Out-String
vercel dns list cbrb.cl 2>&1 | Out-String
