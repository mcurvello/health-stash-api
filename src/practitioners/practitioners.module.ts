import { Module } from '@nestjs/common';
import { PractitionersController } from './practitioners.controller';
import { FhirService } from 'src/fhir/fhir.service';

@Module({
  controllers: [PractitionersController],
  providers: [FhirService],
})
export class PractitionersModule {}
