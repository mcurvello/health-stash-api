import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { FhirService } from 'src/fhir/fhir.service';

@Controller('practitioners')
export class PractitionersController {
  constructor(private readonly fhirService: FhirService) {}

  @Get(':id')
  async getPractitionerById(@Req() request, @Param('id') id: string) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.getPractitionerById(accessToken, id);
  }

  @Get()
  async getPractitioners(@Req() request) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.getPractitioners(accessToken);
  }

  @Post()
  async postPractitioner(@Req() request, @Body() data: any) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.postPractitioner(accessToken, data);
  }
}
