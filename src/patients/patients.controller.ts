import { Controller, Get, Post, Body, Req, Param } from '@nestjs/common';
import { FhirService } from 'src/fhir/fhir.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly fhirService: FhirService) {}

  @Get(':id')
  async getPatientById(@Req() request, @Param('id') id: string) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.getPatientById(accessToken, id);
  }

  @Get()
  async getPatients(@Req() request) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.getPatients(accessToken);
  }

  @Post()
  async postPatient(@Req() request, @Body() data: any) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.postPatient(accessToken, data);
  }
}
