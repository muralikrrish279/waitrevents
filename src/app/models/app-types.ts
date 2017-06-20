export interface IEvent{
    title : string;
    description? : string;
    badgeIcon? : string;
    image? : string;
    color? : string;
}

export interface ITimeline{
    timelineName : string;
    events : IEvent[];
}

export enum eventType{
    he,
    she,
    meetup
}

export interface IApp{
    title : string;
    logo? : string;
    description? : string;
}