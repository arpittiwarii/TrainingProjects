// // const date = new Date('2026-06-05T12:35:00z')
// // const expire = new Date()
// // console.log(date,"\n",expire)
// // if(date>expire){
// //     console.log("expire")
// // }
// // else console.log("not expire")

// // Never Apply Timezone Offsets In Backend Calculations
// // const expiry =
// //     createdAt + (24 * 60 * 60 * 1000);


// //     const start = "12/06/2026";
// // const end = "02/07/2026";

// // console.log(start > end);

// // String comparison:

// // "12" > "02"

// // Result:

// // true

// // But chronologically?

// // 12 June < 2 July

// // Wrong answer.

// // Another Example
// // "9/10/2026" > "10/10/2026"

// // String comparison:

// // 9 > 1

// // Returns:

// // true

// // Wrong again.
// // const start = new Date("2026-06-12");
// // const end = new Date("2026-07-02");

// // console.log(start < end);

// // // 3. Store expires_at and Let PostgreSQL Check Expiry
// // Senior Approach

// // Let PostgreSQL do it.

// // SELECT *
// // FROM bonuses
// // WHERE expires_at < NOW();

// import { format, addDays, parseISO, isAfter, addHours, addMinutes, subDays } from "date-fns";
// const date = new Date();

// const newdate = date.setDate(date.getDate() + 7);
// console.log(newdate)

// const date2 = new Date()
// const expire = addDays(date2,7)
// console.log(expire)
// const hours = addHours(date,3)
// const minute = addMinutes(hours, 5)
// const created = subDays(date2,7)
// console.log(hours,minute, created)
// // output :- 2026-06-12T10:36:23.796Z 2026-06-12T10:41:23.796Z 2026-05-29T07:36:23.797Z

// // const date = parseISO("2026-06-05T04:30:00Z");
// // console.log(date)