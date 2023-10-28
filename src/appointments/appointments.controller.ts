import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FhirService } from 'src/fhir/fhir.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly fhirService: FhirService) {}

  @Get()
  async getAppointments(@Req() request) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.getAppointments(accessToken);
  }

  @Post()
  async postAppointment(@Req() request, @Body() data: any) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.postAppointment(accessToken, data);
  }
}
