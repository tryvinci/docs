intro.md


---
title: Getting started
subtitle: Build your first AI-powered video and audio application in 5 minutes.
---


import { Card, CardGroup, CodeBlocks, Steps, Warning, Tip, Info } from '@site/src/components/CustomComponents';


# Getting started


Vinci is a platform for creating AI agents for video production. Transform your content with powerful APIs for speech processing, voice conversion, video generation, and video manipulation.


## Features


Vinci provides a comprehensive suite of AI-powered tools:


<CardGroup cols={3}>
 <Card title="Video generation" icon="play">
   Generate videos from text prompts or images using AI.
 </Card>
 <Card title="Account management" icon="user-gear">
   Manage your account settings and preferences.
 </Card>
 <Card title="API management" icon="key">
   Secure API key management and authentication.
 </Card>
 <Card title="Usage tracking" icon="chart-bar">
   Monitor usage and manage billing preferences.
 </Card>
</CardGroup>


## Quick start


### Step 1: Get your API key


Sign up for a Vinci account and create your first API key:


<Steps>
 ### Create account
 Visit [https://app.tryvinci.com](https://app.tryvinci.com) and sign up for an account.


 ### Generate API key
 Navigate to your [API dashboard](https://app.tryvinci.com/dashboard/api) and create a new API key. Your API key will look like `sk-...`.


 ### Add balance
 Add credits to your account to start using the APIs. Video generation costs $0.05 per second.
</Steps>


### Step 2: Make your first API call


<CodeBlocks>
```python title="hello_world.py"
import requests


# Generate a video from text
url = "https://tryvinci.com/api/v1/generate/text-to-video"
headers = {
   "Authorization": "Bearer sk-your-api-key-here",
   "Content-Type": "application/json"
}
data = {
   "prompt": "A serene sunset over a calm lake",
   "duration_seconds": 5,
   "aspect_ratio": "16:9"
}


response = requests.post(url, headers=headers, json=data)
result = response.json()
print(f"Request ID: {result['request_id']}")
```


```javascript title="hello_world.js"
// Generate a video from text
const response = await fetch('https://tryvinci.com/api/v1/generate/text-to-video', {
 method: 'POST',
 headers: {
   'Authorization': 'Bearer sk-your-api-key-here',
   'Content-Type': 'application/json',
 },
 body: JSON.stringify({
   prompt: 'A serene sunset over a calm lake',
   duration_seconds: 5,
   aspect_ratio: '16:9'
 }),
});


const result = await response.json();
console.log(`Request ID: ${result.request_id}`);
```
</CodeBlocks>


### Step 3: Check the status


Video generation is asynchronous. Poll the status endpoint to check when your video is ready:


<CodeBlocks>
```python title="check_status.py"
import requests
import time


request_id = "your-request-id"
url = f"https://tryvinci.com/api/v1/status/{request_id}"
headers = {"Authorization": "Bearer sk-your-api-key-here"}


while True:
   response = requests.get(url, headers=headers)
   status = response.json()
  
   if status['status'] == 'completed':
       print(f"Video ready: {status['video_url']}")
       break
   elif status['status'] == 'failed':
       print("Generation failed")
       break
  
   print(f"Status: {status['status']}")
   time.sleep(5)
```


```javascript title="check_status.js"
const requestId = 'your-request-id';
const url = `https://tryvinci.com/api/v1/status/${requestId}`;


const checkStatus = async () => {
 const response = await fetch(url, {
   headers: {
     'Authorization': 'Bearer sk-your-api-key-here',
   },
 });
  const status = await response.json();
  if (status.status === 'completed') {
   console.log(`Video ready: ${status.video_url}`);
   return status;
 } else if (status.status === 'failed') {
   console.log('Generation failed');
   return status;
 }
  console.log(`Status: ${status.status}`);
 setTimeout(checkStatus, 5000);
};


checkStatus();
```
</CodeBlocks>


## Authentication


All API requests require a Bearer token for authentication:


```http
Authorization: Bearer sk-your-api-key-here
```


<Warning>
Keep your API key secure and never expose it in client-side code. Use environment variables or secure key management systems.
</Warning>


## Pricing


Vinci uses a simple usage-based pricing model:


- **Video generation**: $0.05 per second of generated video
- **API management**: Free with your account
- **Usage monitoring**: Free with your account


Check your current balance and usage at any time through the API.


## Base URL


All API endpoints use the following base URL:


```
https://tryvinci.com/api
```


## Next steps


<CardGroup cols={2}>
 <Card title="API reference" href="/api-reference/video-generation">
   Explore all available endpoints and parameters.
 </Card>
 <Card title="JavaScript SDK" href="/sdk">
   Use our JavaScript SDK for easier integration.
 </Card>
</CardGroup>


___


api-keys.md


---
title: API keys
subtitle: Manage your API keys and authentication credentials.
---


import { Accordion, AccordionGroup, CodeBlocks, Warning, Tip } from '@site/src/components/CustomComponents';


# API keys


Securely authenticate your requests to the Vinci API using API keys.


## Overview


Vinci uses API keys for authentication. All API requests must include your API key in the Authorization header using Bearer token authentication.


<Warning>
Keep your API keys secure and never expose them in client-side code. Use environment variables or secure key management systems in production.
</Warning>


## Authentication


Include your API key in the Authorization header of every request:


```http
Authorization: Bearer sk-your-api-key-here
```


### Example request


<CodeBlocks>
```python title="authenticated_request.py"
import requests


headers = {
   "Authorization": "Bearer sk-your-api-key-here",
   "Content-Type": "application/json"
}


response = requests.get(
   "https://tryvinci.com/api/v1/billing/balance",
   headers=headers
)


balance = response.json()
print(f"Current balance: ${balance['balance_usd']}")
```


```javascript title="authenticated_request.js"
const response = await fetch('https://tryvinci.com/api/v1/billing/balance', {
 headers: {
   'Authorization': 'Bearer sk-your-api-key-here',
 },
});


const balance = await response.json();
console.log(`Current balance: $${balance.balance_usd}`);
```
</CodeBlocks>


## Create API key


Generate a new API key for your account.


### Endpoint


```http
POST /api/v1/keys
```


### Authentication


```http
Authorization: Bearer sk-existing-api-key
```


### Request body


| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `name` | string | Descriptive name for the API key | Required |
| `rate_limit` | integer | Requests per minute limit | 10 |


### Response


```json
{
 "key_id": "vinci_abc123...",
 "name": "Production API Key",
 "api_key": "sk-your-new-api-key-here",
 "rate_limit": 10,
 "created_at": "2024-01-01T00:00:00Z"
}
```


### Code example


<CodeBlocks>
```python title="create_key.py"
import requests


url = "https://tryvinci.com/api/v1/keys"
headers = {
   "Authorization": "Bearer sk-existing-api-key",
   "Content-Type": "application/json"
}
data = {
   "name": "Production API Key",
   "rate_limit": 20
}


response = requests.post(url, headers=headers, json=data)
result = response.json()


print(f"New API key created: {result['api_key']}")
print(f"Key ID: {result['key_id']}")
```


```javascript title="create_key.js"
const response = await fetch('http://34.67.47.2:8000/api/v1/keys', {
 method: 'POST',
 headers: {
   'Authorization': 'Bearer sk-existing-api-key',
   'Content-Type': 'application/json',
 },
 body: JSON.stringify({
   name: 'Production API Key',
   rate_limit: 20
 }),
});


const result = await response.json();
console.log(`New API key created: ${result.api_key}`);
console.log(`Key ID: ${result.key_id}`);
```
</CodeBlocks>


<Tip>
Store the full API key securely as it won't be shown again. Only the key preview will be available in future responses.
</Tip>


## List API keys


View all API keys associated with your account.


### Endpoint


```http
GET /api/v1/keys
```


### Authentication


```http
Authorization: Bearer sk-your-api-key-here
```


### Response


```json
{
 "api_keys": [
   {
     "key_id": "vinci_abc123...",
     "name": "Production API Key",
     "is_active": true,
     "created_at": "2024-01-01T00:00:00Z",
     "last_used": "2024-01-01T12:00:00Z",
     "key_preview": "sk-...abc123...",
     "rate_limit": 10
   },
   {
     "key_id": "vinci_def456...",
     "name": "Development API Key",
     "is_active": false,
     "created_at": "2024-01-02T00:00:00Z",
     "last_used": null,
     "key_preview": "sk-...def456...",
     "rate_limit": 5
   }
 ],
 "count": 2
}
```


### Code example


<CodeBlocks>
```python title="list_keys.py"
import requests


url = "http://34.67.47.2:8000/api/v1/keys"
headers = {"Authorization": "Bearer sk-your-api-key-here"}


response = requests.get(url, headers=headers)
result = response.json()


print(f"Total API keys: {result['count']}")
for key in result['api_keys']:
   status = "Active" if key['is_active'] else "Disabled"
   print(f"- {key['name']}: {key['key_preview']} ({status})")
```


```javascript title="list_keys.js"
const response = await fetch('http://34.67.47.2:8000/api/v1/keys', {
 headers: {
   'Authorization': 'Bearer sk-your-api-key-here',
 },
});


const result = await response.json();
console.log(`Total API keys: ${result.count}`);


result.api_keys.forEach(key => {
 const status = key.is_active ? 'Active' : 'Disabled';
 console.log(`- ${key.name}: ${key.key_preview} (${status})`);
});
```
</CodeBlocks>


## Revoke API key


Permanently delete an API key. This action cannot be undone.


### Endpoint


```http
DELETE /api/v1/keys/{key_id}
```


### Authentication


```http
Authorization: Bearer sk-your-api-key-here
```


### Response


```json
{
 "message": "API key revoked successfully",
 "key_id": "vinci_abc123..."
}
```


### Code example


<CodeBlocks>
```python title="revoke_key.py"
import requests


key_id = "vinci_abc123..."
url = f"http://34.67.47.2:8000/api/v1/keys/{key_id}"
headers = {"Authorization": "Bearer sk-your-api-key-here"}


response = requests.delete(url, headers=headers)
result = response.json()


print(f"API key revoked: {result['message']}")
```


```javascript title="revoke_key.js"
const keyId = 'vinci_abc123...';
const response = await fetch(`http://34.67.47.2:8000/api/v1/keys/${keyId}`, {
 method: 'DELETE',
 headers: {
   'Authorization': 'Bearer sk-your-api-key-here',
 },
});


const result = await response.json();
console.log(`API key revoked: ${result.message}`);
```
</CodeBlocks>


<Warning>
Revoking an API key immediately disables all applications using that key. Make sure to update your applications with a new key before revoking the old one.
</Warning>


## Rate limits


Each API key has configurable rate limits to prevent abuse and ensure fair usage.


### Default limits


- **New keys**: 10 requests per minute
- **Maximum**: 100 requests per minute


### Rate limit headers


API responses include rate limit information in the headers:


```http
X-RateLimit-Limit: 10
X-RateLimit-Remaining: 7
X-RateLimit-Reset: 1640995200
```


### Handling rate limits


When you exceed your rate limit, the API returns a 429 status code:


```json
{
 "detail": "Rate limit exceeded. Try again in 60 seconds."
}
```


<CodeBlocks>
```python title="rate_limit_handling.py"
import requests
import time


def make_request_with_retry(url, headers, max_retries=3):
   for attempt in range(max_retries):
       response = requests.get(url, headers=headers)
      
       if response.status_code == 429:
           # Rate limited, wait and retry
           wait_time = 60  # seconds
           print(f"Rate limited. Waiting {wait_time} seconds...")
           time.sleep(wait_time)
           continue
      
       return response
  
   raise Exception("Max retries exceeded")
```


```javascript title="rate_limit_handling.js"
async function makeRequestWithRetry(url, options, maxRetries = 3) {
 for (let attempt = 0; attempt < maxRetries; attempt++) {
   const response = await fetch(url, options);
  
   if (response.status === 429) {
     // Rate limited, wait and retry
     const waitTime = 60000; // milliseconds
     console.log(`Rate limited. Waiting ${waitTime/1000} seconds...`);
     await new Promise(resolve => setTimeout(resolve, waitTime));
     continue;
   }
  
   return response;
 }
  throw new Error('Max retries exceeded');
}
```
</CodeBlocks>


## Best practices


<AccordionGroup>
 <Accordion title="Key rotation">
   Regularly rotate your API keys for security. Create a new key before revoking the old one to avoid service interruptions.
 </Accordion>


 <Accordion title="Environment separation">
   Use different API keys for development, staging, and production environments. Set appropriate rate limits for each.
 </Accordion>


 <Accordion title="Monitoring usage">
   Monitor the `last_used` field to identify unused keys that can be safely revoked.
 </Accordion>


 <Accordion title="Error handling">
   Always implement proper error handling for authentication failures and rate limits in your applications.
 </Accordion>
</AccordionGroup>


____




billing.md


---
title: Billing and usage
subtitle: Monitor your account balance and API usage.
---


import { Card, CardGroup, Accordion, AccordionGroup, CodeBlocks, Info, Tip } from '@site/src/components/CustomComponents';


# Billing and usage


Track your account balance, usage statistics, and manage your billing preferences.


## Overview


Vinci uses a simple usage-based pricing model. Monitor your spending and usage patterns to optimize your costs and ensure uninterrupted service.


<CardGroup cols={2}>
 <Card title="Balance checking" icon="wallet">
   Check your current account balance in real-time.
 </Card>
 <Card title="Usage statistics" icon="chart-line">
   Monitor API usage and costs over time.
 </Card>
</CardGroup>


## Pricing


- **Video generation**: $0.05 per second of generated video
- **API management**: Free with your account
- **Usage monitoring**: Free with your account


<Info>
All prices are in USD. Usage is calculated to the nearest cent based on actual processing time.
</Info>


## Check balance


Get your current account balance and total spending.


### Endpoint


```http
GET /api/v1/billing/balance
```


### Authentication


```http
Authorization: Bearer sk-your-api-key-here
```


### Response


```json
{
 "balance_usd": 25.5000,
 "total_spent_usd": 134.7500
}
```


### Code example


<CodeBlocks>
```python title="check_balance.py"
import requests


url = "https://tryvinci.com/api/v1/billing/balance"
headers = {"Authorization": "Bearer sk-your-api-key-here"}


response = requests.get(url, headers=headers)
balance = response.json()


print(f"Current balance: ${balance['balance_usd']:.2f}")
print(f"Total spent: ${balance['total_spent_usd']:.2f}")


# Check if balance is low
if balance['balance_usd'] < 5.0:
   print("⚠️  Low balance! Consider adding more credits.")
```


```javascript title="check_balance.js"
const response = await fetch('https://tryvinci.com/api/v1/billing/balance', {
 headers: {
   'Authorization': 'Bearer sk-your-api-key-here',
 },
});


const balance = await response.json();
console.log(`Current balance: $${balance.balance_usd.toFixed(2)}`);
console.log(`Total spent: $${balance.total_spent_usd.toFixed(2)}`);


// Check if balance is low
if (balance.balance_usd < 5.0) {
 console.log('⚠️  Low balance! Consider adding more credits.');
}
```
</CodeBlocks>


## Get usage statistics


Monitor your API usage and costs over a specified time period.


### Endpoint


```http
GET /api/v1/billing/usage?days={days}
```


### Authentication


```http
Authorization: Bearer sk-your-api-key-here
```


### Query parameters


| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `days` | integer | Number of days to look back (1-90) | 30 |


### Response


```json
{
 "period_days": 30,
 "total_requests": 156,
 "total_seconds": 420.5,
 "total_cost_usd": 21.0250,
 "current_balance_usd": 25.5000,
 "total_spent_usd": 134.7500
}
```


### Code example


<CodeBlocks>
```python title="usage_stats.py"
import requests


# Get usage for the last 7 days
url = "https://tryvinci.com/api/v1/billing/usage?days=7"
headers = {"Authorization": "Bearer sk-your-api-key-here"}


response = requests.get(url, headers=headers)
usage = response.json()


print(f"Usage for last {usage['period_days']} days:")
print(f"- Total requests: {usage['total_requests']}")
print(f"- Total video seconds: {usage['total_seconds']}")
print(f"- Total cost: ${usage['total_cost_usd']:.2f}")
print(f"- Current balance: ${usage['current_balance_usd']:.2f}")


# Calculate average cost per request
if usage['total_requests'] > 0:
   avg_cost = usage['total_cost_usd'] / usage['total_requests']
   print(f"- Average cost per request: ${avg_cost:.3f}")
```


```javascript title="usage_stats.js"
// Get usage for the last 7 days
const response = await fetch('https://tryvinci.com/api/v1/billing/usage?days=7', {
 headers: {
   'Authorization': 'Bearer sk-your-api-key-here',
 },
});


const usage = await response.json();
console.log(`Usage for last ${usage.period_days} days:`);
console.log(`- Total requests: ${usage.total_requests}`);
console.log(`- Total video seconds: ${usage.total_seconds}`);
console.log(`- Total cost: $${usage.total_cost_usd.toFixed(2)}`);
console.log(`- Current balance: $${usage.current_balance_usd.toFixed(2)}`);


// Calculate average cost per request
if (usage.total_requests > 0) {
 const avgCost = usage.total_cost_usd / usage.total_requests;
 console.log(`- Average cost per request: $${avgCost.toFixed(3)}`);
}
```
</CodeBlocks>


## Monitor balance before requests


Always check your balance before making expensive API calls to avoid failed requests.


<CodeBlocks>
```python title="balance_check.py"
import requests


def check_balance_for_video(duration_seconds, api_key):
   """Check if balance is sufficient for video generation"""
  
   # Check current balance
   balance_url = "http://34.67.47.2:8000/api/v1/billing/balance"
   headers = {"Authorization": f"Bearer {api_key}"}
  
   response = requests.get(balance_url, headers=headers)
   balance = response.json()
  
   # Calculate estimated cost
   estimated_cost = duration_seconds * 0.05
   current_balance = balance['balance_usd']
  
   print(f"Current balance: ${current_balance:.2f}")
   print(f"Estimated cost: ${estimated_cost:.2f}")
  
   if current_balance < estimated_cost:
       print("❌ Insufficient balance for this request")
       return False
  
   print("✅ Sufficient balance available")
   return True


# Example usage
api_key = "sk-your-api-key-here"
video_duration = 8  # seconds


if check_balance_for_video(video_duration, api_key):
   print("Proceeding with video generation...")
   # Make video generation request
else:
   print("Please add more credits to your account")
```


```javascript title="balance_check.js"
async function checkBalanceForVideo(durationSeconds, apiKey) {
 // Check current balance
 const balanceResponse = await fetch('http://34.67.47.2:8000/api/v1/billing/balance', {
   headers: { 'Authorization': `Bearer ${apiKey}` },
 });
  const balance = await balanceResponse.json();
  // Calculate estimated cost
 const estimatedCost = durationSeconds * 0.05;
 const currentBalance = balance.balance_usd;
  console.log(`Current balance: $${currentBalance.toFixed(2)}`);
 console.log(`Estimated cost: $${estimatedCost.toFixed(2)}`);
  if (currentBalance < estimatedCost) {
   console.log('❌ Insufficient balance for this request');
   return false;
 }
  console.log('✅ Sufficient balance available');
 return true;
}


// Example usage
const apiKey = 'sk-your-api-key-here';
const videoDuration = 8; // seconds


if (await checkBalanceForVideo(videoDuration, apiKey)) {
 console.log('Proceeding with video generation...');
 // Make video generation request
} else {
 console.log('Please add more credits to your account');
}
```
</CodeBlocks>


## Adding balance


To add credits to your account, visit your dashboard at [https://tryvinci.com](https://tryvinci.com) and navigate to the billing section. You can add credits using:


- Credit/debit cards
- PayPal
- Bank transfers (for larger amounts)


<Tip>
Set up automatic top-ups to ensure uninterrupted service. You can configure your account to automatically add credits when your balance falls below a specified threshold.
</Tip>


## Cost optimization tips


<AccordionGroup>
 <Accordion title="Video duration">
   Use shorter durations for testing and development. A 3-second test video costs $0.15 instead of $0.50 for a 10-second video.
 </Accordion>


 <Accordion title="Batch processing">
   Group multiple requests together to reduce overhead and optimize your usage patterns.
 </Accordion>


 <Accordion title="Monitor usage regularly">
   Check your usage statistics weekly to identify patterns and optimize your costs.
 </Accordion>


 <Accordion title="Set balance alerts">
   Configure notifications when your balance drops below a certain threshold to avoid service interruptions.
 </Accordion>
</AccordionGroup>


## Error handling


### Insufficient balance


When your balance is too low for a request, the API returns a 402 status code:


```json
{
 "detail": "Insufficient balance. Current balance: $1.25, required: $2.50"
}
```


Handle this error gracefully in your applications:


<CodeBlocks>
```python title="error_handling.py"
import requests


def make_video_request(prompt, duration, api_key):
   url = "http://34.67.47.2:8000/api/v1/generate/text-to-video"
   headers = {
       "Authorization": f"Bearer {api_key}",
       "Content-Type": "application/json"
   }
   data = {
       "prompt": prompt,
       "duration_seconds": duration
   }
  
   try:
       response = requests.post(url, headers=headers, json=data)
      
       if response.status_code == 402:
           error_data = response.json()
           print(f"Insufficient balance: {error_data['detail']}")
           return None
      
       response.raise_for_status()
       return response.json()
      
   except requests.exceptions.RequestException as e:
       print(f"Request failed: {e}")
       return None
```


```javascript title="error_handling.js"
async function makeVideoRequest(prompt, duration, apiKey) {
 const url = 'http://34.67.47.2:8000/api/v1/generate/text-to-video';
  try {
   const response = await fetch(url, {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${apiKey}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       prompt: prompt,
       duration_seconds: duration
     }),
   });
  
   if (response.status === 402) {
     const errorData = await response.json();
     console.log(`Insufficient balance: ${errorData.detail}`);
     return null;
   }
  
   if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
   }
  
   return await response.json();
  
 } catch (error) {
   console.log(`Request failed: ${error.message}`);
   return null;
 }
}
```
</CodeBlocks>


## Best practices


<CardGroup cols={2}>
 <Card title="Regular monitoring" icon="chart-line">
   Check your balance and usage statistics regularly to avoid service interruptions.
 </Card>
 <Card title="Cost estimation" icon="calculator">
   Always estimate costs before making requests, especially for longer videos.
 </Card>
 <Card title="Error handling" icon="shield">
   Implement proper error handling for insufficient balance scenarios.
 </Card>
 <Card title="Budget management" icon="piggy-bank">
   Set up automatic top-ups and balance alerts to maintain service continuity.
 </Card>
</CardGroup>


___


video-generation.md


---
title: Video generation
subtitle: Generate videos from text prompts or images using AI.
---


import { Card, CardGroup, Accordion, AccordionGroup, CodeBlocks, Tip, Warning, Tabs, Tab } from '@site/src/components/CustomComponents';


# Video generation


Create high-quality videos from text descriptions or transform static images into dynamic video content.


## Overview


Vinci's video generation API uses advanced AI models to create videos from text prompts or images. The service supports multiple aspect ratios and durations, making it perfect for content creation, marketing, and creative projects.


<CardGroup cols={2}>
 <Card title="Text to video" icon="wand-magic-sparkles">
   Generate videos from descriptive text prompts.
 </Card>
 <Card title="Image to video" icon="image">
   Animate static images with motion and effects.
 </Card>
</CardGroup>


## Pricing


Video generation costs **$0.05 per second** of generated video. A 5-second video costs $0.25.


<Tip>
Check your account balance before generating videos to ensure you have sufficient credits.
</Tip>


## Text-to-video generation


Generate videos from text descriptions using AI.


### Endpoint


```http
POST /api/v1/generate/text-to-video
```


### Authentication


```http
Authorization: Bearer sk-your-api-key-here
```


### Request body


| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `prompt` | string | Text description of the video to generate | Required |
| `duration_seconds` | integer | Video duration in seconds (1-10) | 5 |
| `aspect_ratio` | string | Video aspect ratio: "16:9", "9:16", "1:1" | "16:9" |
| `seed` | integer | Random seed for reproducible results | -1 (random) |


### Response


```json
{
 "request_id": "req_abc123...",
 "status": "pending",
 "estimated_cost_usd": 0.25,
 "estimated_duration_seconds": 5
}
```


### Code example


<CodeBlocks>
```python title="text_to_video.py"
import requests
import time


# Generate video from text
url = "https://tryvinci.com/api/v1/generate/text-to-video"
headers = {
   "Authorization": "Bearer sk-your-api-key-here",
   "Content-Type": "application/json"
}
data = {
   "prompt": "A majestic eagle soaring through mountain peaks at sunset",
   "duration_seconds": 8,
   "aspect_ratio": "16:9"
}


response = requests.post(url, headers=headers, json=data)
result = response.json()
request_id = result["request_id"]


print(f"Generation started. Request ID: {request_id}")
print(f"Estimated cost: ${result['estimated_cost_usd']}")


# Poll for completion
status_url = f"https://tryvinci.com/api/v1/status/{request_id}"


while True:
   status_response = requests.get(status_url, headers=headers)
   status = status_response.json()
  
   print(f"Status: {status['status']}")
  
   if status['status'] == 'completed':
       print(f"Video ready: {status['video_url']}")
       print(f"Duration: {status['duration_seconds']} seconds")
       print(f"Final cost: ${status['cost_usd']}")
       break
   elif status['status'] == 'failed':
       print("Generation failed")
       break
  
   time.sleep(5)
```


```javascript title="text_to_video.js"
// Generate video from text
const generateVideo = async () => {
 const response = await fetch('https://tryvinci.com/api/v1/generate/text-to-video', {
   method: 'POST',
   headers: {
     'Authorization': 'Bearer sk-your-api-key-here',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     prompt: 'A majestic eagle soaring through mountain peaks at sunset',
     duration_seconds: 8,
     aspect_ratio: '16:9'
   }),
 });


 const result = await response.json();
 console.log(`Generation started. Request ID: ${result.request_id}`);
 console.log(`Estimated cost: $${result.estimated_cost_usd}`);
  return result.request_id;
};


// Check status
const checkStatus = async (requestId) => {
 const response = await fetch(`https://tryvinci.com/api/v1/status/${requestId}`, {
   headers: {
     'Authorization': 'Bearer sk-your-api-key-here',
   },
 });
  const status = await response.json();
 console.log(`Status: ${status.status}`);
  if (status.status === 'completed') {
   console.log(`Video ready: ${status.video_url}`);
   console.log(`Duration: ${status.duration_seconds} seconds`);
   console.log(`Final cost: $${status.cost_usd}`);
   return status;
 } else if (status.status === 'failed') {
   console.log('Generation failed');
   return status;
 }
  // Continue polling
 setTimeout(() => checkStatus(requestId), 5000);
};


// Usage
const requestId = await generateVideo();
await checkStatus(requestId);
```
</CodeBlocks>


## Image-to-video generation


Transform static images into dynamic videos with motion and effects.


### Endpoint


```http
POST /api/v1/generate/image-to-video
```


### Authentication


```http
Authorization: Bearer sk-your-api-key-here
```


### Request body


Form data with the following fields:


| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `image` | file | Input image file (JPEG/PNG) | Required |
| `prompt` | string | Text description for video motion | Required |
| `duration_seconds` | integer | Video duration in seconds (1-10) | 5 |


### Response


```json
{
 "request_id": "req_abc123...",
 "status": "pending",
 "estimated_cost_usd": 0.25,
 "estimated_duration_seconds": 5
}
```


### Code example


<CodeBlocks>
```python title="image_to_video.py"
import requests


# Generate video from image
url = "https://tryvinci.com/api/v1/generate/image-to-video"
headers = {"Authorization": "Bearer sk-your-api-key-here"}


# Prepare form data
files = {"image": open("portrait.jpg", "rb")}
data = {
   "prompt": "The person starts smiling and waves at the camera",
   "duration_seconds": 6
}


response = requests.post(url, headers=headers, files=files, data=data)
result = response.json()


print(f"Generation started. Request ID: {result['request_id']}")
print(f"Estimated cost: ${result['estimated_cost_usd']}")
```


```javascript title="image_to_video.js"
// Generate video from image
const fileInput = document.getElementById('imageInput');
const imageFile = fileInput.files[0];


const formData = new FormData();
formData.append('image', imageFile);
formData.append('prompt', 'The person starts smiling and waves at the camera');
formData.append('duration_seconds', '6');


const response = await fetch('https://tryvinci.com/api/v1/generate/image-to-video', {
 method: 'POST',
 headers: {
   'Authorization': 'Bearer sk-your-api-key-here',
 },
 body: formData,
});


const result = await response.json();
console.log(`Generation started. Request ID: ${result.request_id}`);
console.log(`Estimated cost: $${result.estimated_cost_usd}`);
```
</CodeBlocks>


## Status checking


Check the progress and results of your video generation requests.


### Endpoint


```http
GET /api/v1/status/{request_id}
```


### Authentication


```http
Authorization: Bearer sk-your-api-key-here
```


### Response


<Tabs>
 <Tab title="Pending">
   ```json
   {
     "request_id": "req_abc123...",
     "status": "pending",
     "estimated_cost_usd": 0.25
   }
   ```
 </Tab>
 <Tab title="Processing">
   ```json
   {
     "request_id": "req_abc123...",
     "status": "processing",
     "estimated_cost_usd": 0.25,
     "progress": 45
   }
   ```
 </Tab>
 <Tab title="Completed">
   ```json
   {
     "request_id": "req_abc123...",
     "status": "completed",
     "video_url": "https://storage.googleapis.com/vinci-dev/videos/generated_video.mp4",
     "duration_seconds": 5.2,
     "cost_usd": 0.26
   }
   ```
 </Tab>
 <Tab title="Failed">
   ```json
   {
     "request_id": "req_abc123...",
     "status": "failed",
     "error": "Invalid prompt format"
   }
   ```
 </Tab>
</Tabs>


### Status values


- `pending`: Request queued for processing
- `processing`: Video generation in progress
- `completed`: Video ready with download URL
- `failed`: Generation failed with error message


## Best practices


<AccordionGroup>
 <Accordion title="Writing effective prompts">
   - Be specific and descriptive
   - Include details about movement, lighting, and style
   - Avoid contradictory instructions
   - Keep prompts under 200 characters for best results
 </Accordion>


 <Accordion title="Image requirements">
   - Use high-resolution images (minimum 512x512)
   - Ensure clear, well-lit subjects
   - Avoid heavily compressed or blurry images
   - Supported formats: JPEG, PNG
 </Accordion>


 <Accordion title="Performance optimization">
   - Poll status every 5-10 seconds
   - Implement exponential backoff for failed requests
   - Cache video URLs for repeated access
   - Use webhooks for production applications
 </Accordion>


 <Accordion title="Cost management">
   - Check balance before generating videos
   - Use shorter durations for testing
   - Monitor usage through the billing API
   - Set up balance alerts
 </Accordion>
</AccordionGroup>


## Error handling


Common error responses and how to handle them:


| Status Code | Error | Solution |
|-------------|-------|----------|
| 401 | Invalid API key | Check your authorization header |
| 402 | Insufficient balance | Add credits to your account |
| 413 | File too large | Reduce image file size |
| 429 | Rate limit exceeded | Wait before making more requests |
| 500 | Server error | Retry the request after a delay |


<Warning>
Always implement proper error handling and retry logic for production applications.
</Warning>



