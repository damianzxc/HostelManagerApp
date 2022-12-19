import { HttpClient } from '@angular/common/http';
import { Host, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { HostelOccupancy } from '../model/hostel-occupancy';

@Injectable({
  providedIn: 'root'
})
export class HostelOccupancyService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getHostelOccupancy(): Observable<HostelOccupancy> {
    return this.http.get<HostelOccupancy>(`${this.apiServerUrl}/room/occupancy-level`);
  }
}
