const t = document.getElementById("template");

const data = [
  {
    id: "38894662-6f8f-4cb5-88f8-3076ef361bc6",
    name: "Michael English",
    email: "brendamclean@mcdonald.com",
    address: "29625 Wendy Walks Suite 059\nNorth Sherri, AL 64485",
    phone_number: "833.921.9587x086",
    birthdate: "1980-07-21",
    registered_at: "2022-12-09T22:49:11",
  },
  {
    id: "2fa5f382-0452-4aa5-a387-d4cf10963b5f",
    name: "Misty Roy",
    email: "jessicaclarke@davis-smith.com",
    address: "Unit 3976 Box 3281\nDPO AA 03316",
    phone_number: "(768)589-6278x300",
    birthdate: "1973-06-06",
    registered_at: "2020-08-07T20:19:18",
  },
  {
    id: "00cfc2c7-2965-481b-8c1a-4d46182d29ff",

    name: "Frances Hughes",
    email: "xhill@briggs.com",
    address: "578 Brian Grove\nSouth Amanda, NY 24401",
    phone_number: "001-609-682-9601x03642",
    birthdate: "1962-05-10",
    registered_at: "2021-02-16T17:57:15",
  },
  {
    id: "f1adb765-b84a-4b80-8c47-983d2bd41b48",
    name: "Kristopher Nash",
    email: "xclark@hotmail.com",
    address: "6128 Davies Shore Apt. 577\nRobertsonmouth, OR 29447",
    phone_number: "630.747.2243x6848",
    birthdate: "1974-02-16",
    registered_at: "2023-04-21T19:21:54",
  },
  {
    id: "6f4eae9b-78e8-44a3-95c2-d51c581cecac",
    name: "Diane Garcia",
    email: "robertsanchez@strickland.com",
    address: "809 Long Place Apt. 920\nChristineberg, VA 19812",
    phone_number: "103-117-6456x147",
    birthdate: "1986-11-20",
    registered_at: "2022-11-17T18:33:03",
  },
  {
    id: "53fd82ab-3a95-4594-bd81-28fd145f8f57",
    name: "Anthony Gonzalez",
    email: "ithomas@peters.com",
    address: "68075 William Springs Apt. 241\nWest Nathan, NM 49573",
    phone_number: "(848)244-4807",
    birthdate: "2003-08-11",
    registered_at: "2020-06-01T10:41:44",
  },
  {
    id: "5513165e-c17f-4868-8c50-8c84ae624c4f",
    name: "Dennis Nelson",
    email: "johnsonmichael@andersen.com",
    address: "49884 Heather Skyway\nWest Christina, TX 29681",
    phone_number: "560.341.7766x779",
    birthdate: "1967-01-05",
    registered_at: "2023-05-14T11:00:17",
  },
  {
    id: "fe012e61-8397-4d0b-9c29-bdadf7ee87ce",
    name: "Kara Yu",
    email: "scotttammy@carroll.com",
    address: "08260 Brandi Forges\nNew Karenport, NE 54272",
    phone_number: "(037)342-1065",
    birthdate: "2004-11-28",
    registered_at: "2023-05-22T19:21:12",
  },
  {
    id: "3c6fdfd9-a72a-420a-a078-e124aecf76b1",
    name: "Matthew Klein",
    email: "brandon16@martin.net",
    address: "Unit 0053 Box 9232\nDPO AP 79335",
    phone_number: "001-865-664-9885x84085",
    birthdate: "1976-07-23",
    registered_at: "2022-01-02T00:17:27",
  },
  {
    id: "bd9b265e-07ca-44e0-aca4-1e974a628c9e",
    name: "Kristen Barajas",
    email: "foxchelsea@lyons.com",
    address: "3410 Eric Road Suite 932\nSouth Lindaville, LA 86312",
    phone_number: "+1-108-710-6719x08403",
    birthdate: "1984-03-13",
    registered_at: "2023-02-01T03:06:51",
  },
];

function looping() {
  for (var i = 0; i < data.length; i++) {
    t.innerHTML += `
    <tr>
          <td>${data[i].id}</td>
          <td>${data[i].name}</td>
          <td>${data[i].email}</td>
          <td>${data[i].address}</td>
          <td>${data[i].phone_number}</td>
          <td>${data[i].birthdate}</td>
          <td>${data[i].registered_at}</td>
        </tr>
        `;
  }
}

looping()
// console.log(data[1].name)
