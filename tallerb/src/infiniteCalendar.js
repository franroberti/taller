import React, {Component} from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once


// Render the Calendar
let today = new Date();
let lastYear = new Date(today.getFullYear()-1, today.getMonth(), today.getDate());


export class Calendar extends Component{

    render(){
        return(
            <InfiniteCalendar
                width={800}
                height={400}
                selected={today}
                disabledDays={[0,6]}
                minDate={lastYear}
                locale={{
                    locale: require('date-fns/locale/es'),
                    headerFormat: 'dddd, D MMM',
                    weekdays: ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"],
                    blank: 'Seleccione una fecha',
                    todayLabel: {
                        long: 'Hoy',
                        short: 'Hoy'
                    }
                }}
                displayOptions={{
                    layout: 'landscape',
                }}
            />
        )
    }
}
