import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { environment } from "../../../environments/environment";
import { UrlService } from "../url.service";
import { CreateTechnologyDto } from "../../models/dtos/create-technology.dto";
import { TechnologyDto } from "../../models/dtos/technology.dto";

@Injectable()
export class TechnologyService {

    constructor(
        private http: HttpClient,
        private urlService: UrlService) {}

    public getTechnologies(): Observable<Array<TechnologyDto>> {
        return this.http.get<Array<TechnologyDto>>(environment.apiBaseUrl + this.urlService.getUrl("GetTechnologies"))
            .catch(this.handleError);
    }

    public createTechnology(technology: CreateTechnologyDto): Observable<CreateTechnologyDto> {
        return this.http.post(environment.apiBaseUrl + this.urlService.getUrl("CreateTechnology"), technology)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error);
    }
}