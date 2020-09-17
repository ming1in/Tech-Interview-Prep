const axios = require('axios');

const datasetUrl = 'https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=4abcb5bda302cd940899c4713529'
const resultsUrl = 'https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=4abcb5bda302cd940899c4713529'

class Partner {
  constructor(partner) {
    this.firstName = partner.firstName
    this.lastName = partner.lastName
    this.email = partner.email
    this.country = partner.country
    this.availableDates = partner.availableDates
  }
}

class Country {
  constructor() {
    this.attendeeCount = 0
    this.attendees = []
    this.name = null
    this.startDate = null
  }

  addPartner(partner) {
    this.attendees.push(partner.email)
  }
  //formatts final answer
  getResults() {
    const result = {
      attendeeCount: this.attendees.length,
      attendees: this.attendees.sort(),
      name: this.name,
      startDate: this.startDate
    }

    return result
  }
}

async function Hubspot() {
  const countries =[]

  const response = await axios.get(datasetUrl)

  const surveyResults = response.data.partners
  /*
  countries: {
    country : {
      date : [partners]
    }
  }
  */
  var tracker = {}

  //iterate through each partner from survey results
  surveyResults.forEach(rawPartner => {
    //initialize new Partner 
    const partner = new Partner(rawPartner)

    //check if we've come across this partner's country, if not add it to the tracker
    if (tracker[partner.country] === undefined) {
      tracker[partner.country] = {}
    }

    //iterate and add partner to a relative date in their country
    partner.availableDates.forEach(date => {
      //check if we've come across this partners available date before, if not add to their country's tracker
      if (tracker[partner.country][date] === undefined) {
        tracker[partner.country][date] = [partner]
      } else {
        tracker[partner.country][date] = [...tracker[partner.country][date], partner]
      }
    })
  });


  for (var country in tracker) {
    //get country
    const dates = tracker[country]

    //sort dates
    const orderedDates = Object.keys(dates).sort()

    var bestStartDateCount = 0
    var bestStartDate
    var attendees = []

    for (var i = 0; i < orderedDates.length - 1; i++){
      console.log(`${orderedDates[i]} | ${orderedDates[i + 1]}`)

      const startDateAttendeees = tracker[country][orderedDates[i]]
      const nextDateAttendees = tracker[country][orderedDates[i + 1]]

      // const totalPartners = startDateAttendeees.length + nextDateAttendees.length

      // if (totalPartners > bestStartDateCount) {
      //   bestStartDate = orderedDates[i]
      //   bestStartDateCount = totalPartners

      //   attendees.length = 0 //reset attendees list

      //   date.forEach(partner => {
      //     attendees.push(partner)
      //   })
        
      //   nextDate.forEach(partner => {
      //     attendees.push(partner)
      //   })
      // }

      //check for partners that can attend both days
      var partnersAttendingInARow = startDateAttendeees.filter((partner) => {
        return nextDateAttendees.includes(partner)
      })

      //save best days accordingly
      if (partnersAttendingInARow.length > bestStartDateCount) {
        bestStartDate = orderedDates[i]
        bestStartDateCount = partnersAttendingInARow.length

        attendees.length = 0 //reset attendees list

        partnersAttendingInARow.forEach(partner => {
          attendees.push(partner)
        })
      }
    }
    //init new country and add props
    var countryResult = new Country()

    countryResult.name = country
    countryResult.startDate = bestStartDate

    attendees.forEach((attendee) => {
      countryResult.addPartner(attendee)
    })
    
    countries.push(countryResult.getResults())
  }
  
  //last thing to do, send POST request 
  const POST_REQUEST = await axios({
    method: 'post',
    url: resultsUrl,
    data: {countries}
  })

  console.log(POST_REQUEST)
}

Hubspot()  
