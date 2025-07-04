# Screeps World Web API - OpenAPI Specification

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0.3-green.svg)](https://spec.openapis.org/oas/v3.0.3)


Unofficial OpenAPI specification for the [Screeps World](https://screeps.com/) Web API.

## Quick Start

### View the API Documentation

#### Online (Swagger UI):
- [View Latest Specification](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/screepers/screeps-world-openapi/main/src/openapi.yaml)

#### Local:
Prerequisites: \
Git and Node.js 16+

```bash
git clone https://github.com/screepers/screeps-world-openapi.git
cd screeps-world-openapi
npm install
npm run serve
```

## Authentication

The Screeps API supports two authentication methods:

### For Official Servers (Auth Tokens)
```http
X-Token: your_auth_token_here
```

### For Private Servers (Signin Method)
1. **Get Token:**
   ```json
   POST /auth/signin
   {
     "email": "your_username_or_email",
     "password": "your_password"
   }
   ```

2. **Use Token:**
   ```http
   X-Token: token_from_signin_response
   X-Username: your_username
   ```

## CORS Limitations

Due to CORS restrictions, the "Try it out" feature in Swagger UI will not work with the live Screeps API. For testing:

- Use [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/)
- Use command-line tools like `curl`
- Use the [Node Screeps API](https://github.com/screepers/node-screeps-api/)
- Use your own application code

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- **Screeps Community**: [Screeps Discord channel #screepers](https://chat.screeps.com/)
- **Issues**: [Create an issue](https://github.com/screepers/screeps-world-openapi/issues)

---

**Note**: This is an unofficial specification. For official API documentation, please refer to the [Screeps Documentation](https://docs.screeps.com/). 