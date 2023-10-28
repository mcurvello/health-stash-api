import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FhirService } from 'src/fhir/fhir.service';

@Controller('medication')
export class MedicationController {
  constructor(private readonly fhirService: FhirService) {}

  @Get()
  async getMedicationRequest(@Req() request) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.getMedicationRequest(accessToken);
  }

  @Post()
  async postMedicationRequest(@Req() request, @Body() data: any) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.postMedicationRequest(accessToken, data);
  }
}
