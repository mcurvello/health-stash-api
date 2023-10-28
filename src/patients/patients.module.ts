import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { FhirService } from 'src/fhir/fhir.service';

@Module({
  controllers: [PatientsController],
  providers: [FhirService],
})
export class PatientsModule {}
