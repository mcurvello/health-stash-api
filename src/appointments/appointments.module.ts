import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { FhirService } from 'src/fhir/fhir.service';

@Module({
  controllers: [AppointmentsController],
  providers: [FhirService],
})
export class AppointmentsModule {}
