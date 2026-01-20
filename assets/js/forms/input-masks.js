document.addEventListener("DOMContentLoaded", function () {
  // 1. Credit Card
  if (document.querySelector(".mask-credit-card")) {
    new Cleave(".mask-credit-card", {
      creditCard: true,
      onCreditCardTypeChanged: function (type) {
        // Optional: Update UI based on card type (visa, mastercard, etc.)
        // console.log("Credit card type changed:", type);
      },
    });
  }

  // 2. Phone Number (Indonesia Region)
  if (document.querySelector(".mask-phone")) {
    new Cleave(".mask-phone", {
      phone: true,
      phoneRegionCode: "ID",
      prefix: "08", // Common prefix for ID mobile
    });
  }

  // 3. Date Formatting
  if (document.querySelector(".mask-date")) {
    new Cleave(".mask-date", {
      date: true,
      delimiter: " / ",
      datePattern: ["d", "m", "Y"],
    });
  }

  // 4. Numeral / Currency
  if (document.querySelector(".mask-currency")) {
    new Cleave(".mask-currency", {
      numeral: true,
      numeralThousandsGroupStyle: "thousand",
      prefix: "Rp ",
      rawValueTrimPrefix: true,
    });
  }

  // 5. Custom Block (License Key)
  if (document.querySelector(".mask-license")) {
    new Cleave(".mask-license", {
      blocks: [4, 4, 4, 4],
      delimiter: "-",
      uppercase: true,
    });
  }
});
