import { Body, Controller, Post, Req } from '@nestjs/common';
import { FhirService } from 'src/fhir/fhir.service';

@Controller('condition')
export class ConditionController {
  constructor(private readonly fhirService: FhirService) {}

  @Post()
  async postCondition(@Req() request, @Body() data: any) {
    const accessToken = request.headers['authorization'];

    if (!accessToken) {
      throw new Error('Token de acesso não fornecido.');
    }

    return this.fhirService.postCondition(accessToken, data);
  }
}
