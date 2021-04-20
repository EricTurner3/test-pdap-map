 var current_state = {
    'Alabama': 'not-started',
    'Alaska': 'not-started',
    'Arizona': 'not-started',
    'Arkansas': 'not-started',
    'California': 'help-needed',
    'Colorado': 'not-started',
    'Connecticut': 'not-started',
    'Delaware': 'not-started',
    'District of Columbia': 'not-started',
    'Florida': 'in-progress',
    'Georgia': 'in-progress',
    'Hawaii': 'not-started',
    'Idaho': 'not-started',
    'Illinois': 'not-started',
    'Indiana': 'in-progress',
    'Iowa': 'not-started',
    'Kansas': 'not-started',
    'Kentucky': 'not-started',
    'Louisiana': 'not-started',
    'Maine': 'not-started',
    'Maryland': 'not-started',
    'Massachusetts': 'not-started',
    'Michigan': 'not-started',
    'Minnesota': 'not-started',
    'Mississippi': 'not-started',
    'Missouri': 'not-started',
    'Montana': 'not-started',
    'Nebraska': 'not-started',
    'Nevada': 'not-started',
    'New Hampshire': 'not-started',
    'New Jersey': 'not-started',
    'New Mexico': 'not-started',
    'New York': 'not-started',
    'North Carolina': 'not-started',
    'North Dakota': 'not-started',
    'Ohio': 'not-started',
    'Oklahoma': 'not-started',
    'Oregon': 'not-started',
    'Pennsylvania': 'not-started',
    'Rhode Island': 'not-started',
    'South Carolina': 'not-started',
    'South Dakota': 'not-started',
    'Tennessee': 'not-started',
    'Texas': 'not-started',
    'Utah': 'not-started',
    'Vermont': 'not-started',
    'Virginia': 'not-started',
    'Washington': 'not-started',
    'West Virginia': 'not-started',
    'Wisconsin': 'not-started',
    'Wyoming': 'not-started'
};

var statuses = {
    'in-progress': '#3a7bd5',
    'not-started': '#cecece',
    'help-needed': '#FFD166',
    'complete': '#06D6A0'
}

var hr_statuses = {
    'in-progress': 'In Progress',
    'not-started': 'Not Started',
    'help-needed': 'Help Needed',
    'complete': 'Complete!'
}

var abbreviations = {
    "Alabama": "AL",
    "Alaska": "AK",
    "Arizona": "AZ",
    "Arkansas": "AR",
    "California": "CA",
    "Colorado": "CO",
    "Connecticut": "CT",
    "Delaware": "DE",
    "District Of Columbia": "DC",
    "Florida": "FL",
    "Georgia": "GA",
    "Hawaii": "HI",
    "Idaho": "ID",
    "Illinois": "IL",
    "Indiana": "IN",
    "Iowa": "IA",
    "Kansas": "KS",
    "Kentucky": "KY",
    "Louisiana": "LA",
    "Maine": "ME",
    "Maryland": "MD",
    "Massachusetts": "MA",
    "Michigan": "MI",
    "Minnesota": "MN",
    "Mississippi": "MS",
    "Missouri": "MO",
    "Montana": "MT",
    "Nebraska": "NE",
    "Nevada": "NV",
    "New Hampshire": "NH",
    "New Jersey": "NJ",
    "New Mexico": "NM",
    "New York": "NY",
    "North Carolina": "NC",
    "North Dakota": "ND",
    "Ohio": "OH",
    "Oklahoma":"OK",
    "Oregon":"OR",
    "Pennsylvania": "PA",
    "Rhode Island": "RI",
    "South Carolina": "SC",
    "South Dakota": "SD",
    "Tennessee": "TN",
    "Texas": "TX",
    "Utah": "UT",
    "Vermont": "VT",
    "Virginia": "VA",
    "Washington": "WA",
    "West Virginia": "WV",
    "Wisconsin": "WI",
    "Wyoming": "WY"
}

var abb_to_state = {
  AL: 'Alabama',
  AK: 'Alaska' ,
  AS: 'American Samoa',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  DC: 'District of Columbia',
  FL: 'Florida',
  GA: 'Georgia',
  GU: 'Guam',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  PR: 'Puerto Rico',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VI: 'Virgin Islands',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
};
