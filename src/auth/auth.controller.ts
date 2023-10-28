import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller('auth')
export class AuthController {
  @Get('login')
  async login() {
    const data = new URLSearchParams();
    data.append('client_id', process.env.APP_ID);
    data.append('client_secret', process.env.APP_SECRET);
    data.append('grant_type', 'client_credentials');
    data.append('resource', process.env.FHIR_ENDPOINT);

    const url =
      process.env.AAD_TENANT + process.env.AAD_TENANT_ID + '/oauth2/token';

    try {
      const response = await axios.post(url, data);

      return response.data.access_token;
    } catch (error) {
      throw error;
    }
  }
}
