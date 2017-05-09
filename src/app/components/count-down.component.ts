import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'count-down',
    template: `<div id="countDown"></div>`
})
export class CountDownComponent implements OnInit {

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        // $('#countDown').countdown('2017/07/03', (event) => {
        //     $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
        // });
    }
}

