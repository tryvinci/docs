# Vinci API Documentation

Official documentation for the [Vinci's API Services](https://tryvinci.com) - AI-powered video generation, image creation, and digital content APIs.

## 🚀 Quick Start

Get started with Vinci in under 5 minutes:

### 1. Get your API key
- Sign up at [https://tryvinci.com](https://tryvinci.com)
- Create an API key from [Vinci Dashboard](https://app.tryvinci.com/dashboard/api)
- Add credits (video generation costs $0.05 per second)

### 2. Make your first video generation request

```bash
curl -X POST "https://tryvinci.com/api/v1/generate/text-to-video" \
  -H "Authorization: Bearer sk-your-api-key-here" \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A serene sunset over a calm lake",
    "duration_seconds": 5,
    "aspect_ratio": "16:9"
  }'
```

```python
import requests

API_KEY = "sk-your-api-key-here"
url = "https://tryvinci.com/api/v1/generate/text-to-video"
headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
data = {
    "prompt": "A serene sunset over a calm lake",
    "duration_seconds": 5,
    "aspect_ratio": "16:9"
}

response = requests.post(url, headers=headers, json=data)
response.raise_for_status()
result = response.json()
print(f"Request ID: {result['request_id']}")
```

### 3. Poll for completion

```bash
curl -X GET "https://tryvinci.com/api/v1/status/your-request-id" \
  -H "Authorization: Bearer sk-your-api-key-here"
```

```python
import time
import requests

API_KEY = "sk-your-api-key-here"
request_id = "your-request-id"
status_url = f"https://tryvinci.com/api/v1/status/{request_id}"
headers = {"Authorization": f"Bearer {API_KEY}"}

while True:
    r = requests.get(status_url, headers=headers)
    r.raise_for_status()
    status = r.json()

    if status["status"] == "completed":
        print(f"Video ready: {status['video_url']}")
        break
    if status["status"] == "failed":
        print("Generation failed")
        break

    print(f"Status: {status['status']}")
    time.sleep(5)
```

## 📖 Full Documentation

Visit [docs.tryvinci.com](https://docs.tryvinci.com) for complete API reference, guides, and examples.

### Key Features
- **Text-to-Video**: Generate videos from text descriptions
- **Image-to-Video**: Animate static images with motion prompts  
- **AI Actors**: Create videos with AI-generated personas
- **Translation**: Multi-language video dubbing and translation
- **QR Code Generation**: Dynamic QR codes with custom designs

### API Endpoints
- `POST /api/v1/generate/text-to-video` - Generate videos from text
- `POST /api/v1/generate/image-to-video` - Animate images
- `GET /api/v1/status/{request_id}` - Check generation status
- `GET /api/v1/billing/balance` - Check account balance
- `GET /api/v1/keys` - Manage API keys

## 🛠 Documentation Development

This repository contains the source for Vinci's API documentation built with [Mintlify](https://mintlify.com).

### Local Development

Install the Mintlify CLI:
```bash
npm i -g mint
```

Run the development server:
```bash
mint dev
```

View your local preview at `http://localhost:3000`.

### Project Structure

```
docs/
├── docs.json              # Main configuration
├── quickstart.mdx         # Quick start guide
├── essentials/            # Authentication, API keys, pricing
├── docs/
│   ├── api-reference/     # Complete API documentation
│   ├── guides/            # Developer guides and tutorials
│   └── platform/          # Platform-specific features
└── ai-tools/              # Development tools configuration
```

### Contributing

1. Fork this repository
2. Make your changes locally using `mint dev`
3. Test your changes thoroughly
4. Submit a pull request

### Publishing

Changes are automatically deployed to [docs.tryvinci.com](https://docs.tryvinci.com) when pushed to the main branch.

## 🔗 Links

- **API Documentation**: [docs.tryvinci.com](https://docs.tryvinci.com)
- **Vinci Platform**: [tryvinci.com](https://tryvinci.com)
- **Dashboard**: [app.tryvinci.com](https://app.tryvinci.com)
- **Support**: [team@tryvinci.com](mailto:team@tryvinci.com)
- **Discord**: [tryvinci.com/discord](https://tryvinci.com/discord)

## 📝 License

This documentation is maintained by the Vinci team. For API usage terms, see [tryvinci.com/terms](https://tryvinci.com/terms).