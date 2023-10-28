import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FhirService {
  private fhirEndpoint = process.env.FHIR_ENDPOINT;

  async getPatientById(accessToken: string, id: string) {
    const url = `${this.fhirEndpoint}Patient/${id}`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPractitionerById(accessToken: string, id: string) {
    const url = `${this.fhirEndpoint}Practitioner/${id}`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPatients(accessToken: string) {
    const url = `${this.fhirEndpoint}Patient?_count=200`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getPractitioners(accessToken: string) {
    const url = `${this.fhirEndpoint}Practitioner?_count=100`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getAppointments(accessToken: string) {
    const url = `${this.fhirEndpoint}Appointment?_count=100`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getMedicationRequest(accessToken: string) {
    const url = `${this.fhirEndpoint}Appointment?_count=100`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async postPatient(accessToken: string, data: any) {
    const url = `${this.fhirEndpoint}Patient`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.post(url, data, { headers });
      const resourceId = response.data.id;

      return resourceId;
    } catch (error) {
      throw error;
    }
  }

  async postPractitioner(accessToken: string, data: any) {
    const url = `${this.fhirEndpoint}Practitioner`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.post(url, data, { headers });
      const resourceId = response.data.id;

      return resourceId;
    } catch (error) {
      throw error;
    }
  }

  async postAppointment(accessToken: string, data: any) {
    const url = `${this.fhirEndpoint}Appointment`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.post(url, data, { headers });
      const resourceId = response.data.id;

      return resourceId;
    } catch (error) {
      throw error;
    }
  }

  async postCondition(accessToken: string, data: any) {
    const url = `${this.fhirEndpoint}Condition`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.post(url, data, { headers });
      const resourceId = response.data.id;

      return resourceId;
    } catch (error) {
      throw error;
    }
  }

  async postMedicationRequest(accessToken: string, data: any) {
    const url = `${this.fhirEndpoint}MedicationRequest`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    };

    try {
      const response = await axios.post(url, data, { headers });
      const resourceId = response.data.id;

      return resourceId;
    } catch (error) {
      throw error;
    }
  }
}
