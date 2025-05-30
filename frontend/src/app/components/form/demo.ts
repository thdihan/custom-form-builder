export const demoForm = {
    groups: [
        {
            name: "Property Details",
            order: 1,
            fields: [
                {
                    label: "Property Name",
                    fieldName: "Property Name", // used as key in responses
                    type: "text",
                    required: true,
                    order: 1,
                },
                {
                    label: "Address",
                    fieldName: "Address", // used as key in responses
                    type: "text",
                    required: true,
                    order: 2,
                },
                {
                    label: "Website",
                    fieldName: "Website", // used as key in responses
                    type: "text",
                    required: false,
                    order: 3,
                },
                {
                    label: "Email",
                    fieldName: "Email", // used as key in responses
                    type: "text",
                    required: true,
                    order: 4,
                },
                {
                    label: "Property Rating",
                    fieldName: "Property Rating", // used as key in responses
                    type: "checkbox",
                    required: true,
                    order: 5,
                    options: [
                        {
                            label: "2 Star",
                            value: "2 Star",
                        },
                        {
                            label: "3 Star",
                            value: "3 Star",
                        },
                        {
                            label: "4 Star",
                            value: "4 Star",
                        },
                        {
                            label: "5 Star",
                            value: "5 Star",
                        },
                        {
                            label: "7 Star",
                            value: "7 Star",
                        },
                    ],
                },
            ],
        },
        {
            name: "Property Facilities",
            order: 2,
            fields: [
                {
                    label: "General Services",
                    fieldName: "General Services", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        {
                            label: "24-hour front desk",
                            value: "24-hour front desk",
                        },
                        {
                            label: "Free Wi-Fi in public areas",
                            value: "Free Wi-Fi in public areas",
                        },
                        {
                            label: "Daily housekeeping",
                            value: "Daily housekeeping",
                        },
                        {
                            label: "Room service",
                            value: "Room service",
                        },
                        {
                            label: "Laundry and dry cleaning",
                            value: "Laundry and dry cleaning",
                        },
                        {
                            label: "Express check-in/check-out",
                            value: "Express check-in/check-out",
                        },
                        {
                            label: "Elevator",
                            value: "Elevator",
                        },
                        {
                            label: "Non-smoking throughout",
                            value: "Non-smoking throughout",
                        },
                        {
                            label: "Heating",
                            value: "Heating",
                        },
                    ],
                },
                {
                    label: "Dining & Beverages",
                    fieldName: "Dining & Beverages", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        { label: "Restaurant", value: "Restaurant" },
                        { label: "Bar", value: "Bar" },
                        {
                            label: "Breakfast in the room",
                            value: "Breakfast in the room",
                        },
                        {
                            label: "Coffee shop on-site",
                            value: "Coffee shop on-site",
                        },
                        {
                            label: "Special diet menus (on request)",
                            value: "Special diet menus (on request)",
                        },
                        {
                            label: "Vending machines (snacks/drinks)",
                            value: "Vending machines (snacks/drinks)",
                        },
                    ],
                },
                {
                    label: "Wellness & Recreation",
                    fieldName: "Wellness & Recreation", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        { label: "Fitness center", value: "Fitness center" },
                        {
                            label: "Spa and wellness center",
                            value: "Spa and wellness center",
                        },
                        { label: "Sauna", value: "Sauna" },
                        { label: "Hot tub/Jacuzzi", value: "Hot tub/Jacuzzi" },
                        {
                            label: "Massage services",
                            value: "Massage services",
                        },
                        { label: "Swimming pool", value: "Swimming pool" },
                        { label: "Solarium", value: "Solarium" },
                        { label: "Beauty services", value: "Beauty services" },
                    ],
                },
                {
                    label: "Family & Entertainment",
                    fieldName: "Family & Entertainment", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        {
                            label: "Children's playground",
                            value: "Children's playground",
                        },
                        { label: "Kids' club", value: "Kids' club" },
                        { label: "Game room", value: "Game room" },
                        {
                            label: "Evening entertainment",
                            value: "Evening entertainment",
                        },
                        {
                            label: "Board games/puzzles",
                            value: "Board games/puzzles",
                        },
                    ],
                },
                {
                    label: "Business & Events",
                    fieldName: "Business & Events", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        { label: "Business center", value: "Business center" },
                        {
                            label: "Meeting/banquet facilities",
                            value: "Meeting/banquet facilities",
                        },
                        {
                            label: "Fax/photocopying",
                            value: "Fax/photocopying",
                        },
                    ],
                },
                {
                    label: "Accessibility",
                    fieldName: "Accessibility", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        {
                            label: "Wheelchair accessible",
                            value: "Wheelchair accessible",
                        },
                        {
                            label: "Toilet with grab rails",
                            value: "Toilet with grab rails",
                        },
                        {
                            label: "Lower bathroom sink",
                            value: "Lower bathroom sink",
                        },
                        {
                            label: "Emergency cord in bathroom",
                            value: "Emergency cord in bathroom",
                        },
                    ],
                },
                {
                    label: "Transportation & Parking",
                    fieldName: "Transportation & Parking", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        { label: "Airport shuttle", value: "Airport shuttle" },
                        { label: "Car rental", value: "Car rental" },
                        { label: "Bicycle rental", value: "Bicycle rental" },
                        { label: "Private parking", value: "Private parking" },
                        {
                            label: "Electric vehicle charging station",
                            value: "Electric vehicle charging station",
                        },
                    ],
                },
                {
                    label: "Outdoor Facilities",
                    fieldName: "Outdoor Facilities", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        { label: "Garden", value: "Garden" },
                        { label: "Terrace", value: "Terrace" },
                        { label: "BBQ facilities", value: "BBQ facilities" },
                        { label: "Picnic area", value: "Picnic area" },
                        {
                            label: "Outdoor furniture",
                            value: "Outdoor furniture",
                        },
                    ],
                },
            ],
        },

        {
            name: "Room Types",
            order: 3,
            fields: [
                {
                    label: "Supported Currency",
                    fieldName: "Supported Currency", // used as key in responses
                    type: "text",
                    required: true,
                    order: 1,
                    placeholder: "Currency ex: BDT, USD, AED etc.",
                },
                {
                    label: "Property Name",
                    fieldName: "Property Name", // used as key in responses
                    type: "table",
                    required: true,

                    order: 6,
                    tableHeaders: [
                        {
                            name: "Room Type",
                            size: "15%",
                        },
                        {
                            name: "Custom Room Name",
                            size: "25%",
                        },
                        {
                            name: "Allowed Guests",
                            size: "10%",
                        },
                        {
                            name: "Number of Rooms",
                            size: "10%",
                        },
                        {
                            name: "Published Rate (Including VAT, TAXES and all charges.)",
                            size: "20%",
                        },
                        {
                            name: "Agency Rate (Including VAT, TAXES and all charges.)",
                            size: "20%",
                        },
                    ],
                    tableData: [
                        [
                            {
                                type: "text",
                                label: "Single Room",
                            },
                            {
                                type: "input:text",
                                label: "Custom Room Name",
                            },
                            {
                                type: "input:number",
                                label: "Allowed Guests",
                            },
                            {
                                type: "input:number",
                                label: "Number of Rooms",
                            },
                            {
                                type: "input:number",
                                label: "Published Rate (excl. VAT)",
                            },
                            {
                                type: "input:number",
                                label: "Agency Rate (excl. VAT)",
                            },
                        ],
                        [
                            {
                                type: "text",
                                label: "Double Room",
                            },
                            {
                                type: "input:text",
                                label: "Custom Room Name",
                            },
                            {
                                type: "input:number",
                                label: "Allowed Guests",
                            },
                            {
                                type: "input:number",
                                label: "Number of Rooms",
                            },
                            {
                                type: "input:number",
                                label: "Published Rate (excl. VAT)",
                            },
                            {
                                type: "input:number",
                                label: "Agency Rate (excl. VAT)",
                            },
                        ],
                    ],
                },
            ],
        },

        {
            name: "Booking Requirements",
            order: 4,
            fields: [
                {
                    label: "",
                    fieldName: "", // used as key in responses
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        {
                            label: "Advance Reservation Required",
                            value: "Advance Reservation Required",
                        },
                        {
                            label: "Booking via Website",
                            value: "Booking via Website",
                        },
                        {
                            label: "Phone Reservation Available",
                            value: "Phone Reservation Available",
                        },
                        {
                            label: "Email Booking Available",
                            value: "Email Booking Available",
                        },
                        {
                            label: "Booking Confirmation Required",
                            value: "Booking Confirmation Required",
                        },
                    ],
                },
            ],
        },
        {
            name: "Property Policies",
            order: 5,
            fields: [
                {
                    label: "Check-in Time",
                    fieldName: "Check-in Time", // used as key in responses
                    type: "text",
                    required: true,
                    order: 1,
                },
                {
                    label: "Check-out Time",
                    fieldName: "Check-out Time", // used as key in responses
                    type: "text",
                    required: true,
                    order: 2,
                },
                {
                    label: "Cancellation Policy",
                    fieldName: "Cancellation Policy", // used as key in responses
                    type: "text",
                    required: true,
                    order: 4,
                    placeholder: "Cancellation Policy",
                },

                {
                    label: "Other Policies",
                    fieldName: "Other Policies", // used as key in responses
                    type: "text",
                    required: true,
                    order: 4,
                    placeholder: "Other Policies",
                },

                {
                    label: "Payment Methods",
                    fieldName: "Payment Methods",
                    type: "checkbox",
                    required: false,
                    order: 3,
                    options: [
                        {
                            label: "Credit Card",
                            value: "Credit Card",
                        },
                        { label: "Debit Card", value: "Debit Card" },
                        { label: "Cash", value: "Cash" },
                    ],
                },
                {
                    label: "",
                    fieldName: "",
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        {
                            label: "Pets Allowed",
                            value: "Pets Allowed",
                        },
                    ],
                },
            ],
        },
        {
            name: "Room Amenities",
            order: 6, // Update as needed
            fields: [
                {
                    label: "General Amenities",
                    fieldName: "General Amenities",
                    type: "checkbox",
                    required: false,
                    order: 1,
                    options: [
                        {
                            label: "Air conditioning",
                            value: "Air conditioning",
                        },
                        { label: "Heating", value: "Heating" },
                        { label: "Soundproofing", value: "Soundproofing" },
                        {
                            label: "Non-smoking rooms",
                            value: "Non-smoking rooms",
                        },
                        {
                            label: "Private entrance",
                            value: "Private entrance",
                        },
                        {
                            label: "Safety deposit box",
                            value: "Safety deposit box",
                        },
                    ],
                },
                {
                    label: "Media & Technology",
                    fieldName: "Media & Technology",
                    type: "checkbox",
                    required: false,
                    order: 2,
                    options: [
                        { label: "Flat-screen TV", value: "Flat-screen TV" },
                        {
                            label: "Cable/satellite channels",
                            value: "Cable/satellite channels",
                        },
                        {
                            label: "Streaming services",
                            value: "Streaming services",
                        },
                        { label: "Telephone", value: "Telephone" },
                        { label: "Free Wi-Fi", value: "Free Wi-Fi" },
                    ],
                },
                {
                    label: "Food & Drink",
                    fieldName: "Food & Drink",
                    type: "checkbox",
                    required: false,
                    order: 3,
                    options: [
                        { label: "Minibar", value: "Minibar" },
                        {
                            label: "Coffee/tea maker",
                            value: "Coffee/tea maker",
                        },
                        { label: "Electric kettle", value: "Electric kettle" },
                        { label: "Refrigerator", value: "Refrigerator" },
                        { label: "Microwave", value: "Microwave" },
                        { label: "Dining area", value: "Dining area" },
                    ],
                },
                {
                    label: "Bathroom",
                    fieldName: "Bathroom",
                    type: "checkbox",
                    required: false,
                    order: 4,
                    options: [
                        {
                            label: "Private bathroom",
                            value: "Private bathroom",
                        },
                        { label: "Shower", value: "Shower" },
                        { label: "Bathtub", value: "Bathtub" },
                        { label: "Free toiletries", value: "Free toiletries" },
                        { label: "Hairdryer", value: "Hairdryer" },
                        { label: "Bathrobe", value: "Bathrobe" },
                        { label: "Slippers", value: "Slippers" },
                        { label: "Towels", value: "Towels" },
                    ],
                },
                {
                    label: "Bedroom",
                    fieldName: "Bedroom",
                    type: "checkbox",
                    required: false,
                    order: 5,
                    options: [
                        {
                            label: "Wardrobe or closet",
                            value: "Wardrobe or closet",
                        },
                        {
                            label: "Extra-long beds (> 2 meters)",
                            value: "Extra-long beds (> 2 meters)",
                        },
                        {
                            label: "Hypoallergenic pillows",
                            value: "Hypoallergenic pillows",
                        },
                        { label: "Linen", value: "Linen" },
                        { label: "Alarm clock", value: "Alarm clock" },
                    ],
                },
                {
                    label: "Accessibility Features",
                    fieldName: "Accessibility Features",
                    type: "checkbox",
                    required: false,
                    order: 6,
                    options: [
                        {
                            label: "Entire unit wheelchair accessible",
                            value: "Entire unit wheelchair accessible",
                        },
                        {
                            label: "Upper floors accessible by elevator",
                            value: "Upper floors accessible by elevator",
                        },
                        {
                            label: "Toilet with grab rails",
                            value: "Toilet with grab rails",
                        },
                        { label: "Roll-in shower", value: "Roll-in shower" },
                        { label: "Shower chair", value: "Shower chair" },
                    ],
                },
            ],
        },

        {
            name: "Contact Details for Reservation",
            order: 7,
            fields: [
                {
                    label: "Contact Name ",
                    fieldName: "Contact Name * ", // used as key in responses
                    type: "text",
                    required: true,
                    order: 2,
                },
                {
                    label: "Phone  ",
                    fieldName: "Phone  ", // used as key in responses
                    type: "text",
                    required: true,
                    order: 3,
                },
                {
                    label: "Email ",
                    fieldName: "Email", // used as key in responses
                    type: "text",
                    required: true,
                    order: 4,
                },

                {
                    label: "",
                    fieldName: "",
                    type: "checkbox",
                    required: false,
                    order: 1,
                    options: [
                        {
                            label: "Email",
                            value: "Email",
                        },
                        { label: "Phone", value: "Phone" },
                    ],
                },
            ],
        },
    ],
};
