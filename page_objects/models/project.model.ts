import {ProjectType} from "../enums/project-type.enum";

export class Project {
    private _name: any;
    private _projectType: ProjectType;
    private _lastUpdate: Date;

    constructor(name?: any, projectType?: ProjectType, lastUpdate?: Date){
        this._name = name;
        this._projectType = projectType;
        this._lastUpdate = lastUpdate;
    }
}