import { Module } from '@nestjs/common';
import { ConditionController } from './condition.controller';
import { FhirService } from 'src/fhir/fhir.service';

@Module({
  controllers: [ConditionController],
  providers: [FhirService],
})
export class ConditionModule {}
