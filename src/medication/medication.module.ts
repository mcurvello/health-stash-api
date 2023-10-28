import { Module } from '@nestjs/common';
import { MedicationController } from './medication.controller';
import { FhirService } from 'src/fhir/fhir.service';

@Module({
  controllers: [MedicationController],
  providers: [FhirService],
})
export class MedicationModule {}
