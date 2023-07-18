# unit-converter

This is my vanilla JavaScript project on unit conversion.

An input field allows the user to input an integer and will trigger an alert if a string or if the value = NaN. Once the user enters a number that string will be converted to a number and sent to 3 other functions getLength, getVolume, and getMass.

Within each of these functions the calculations for each unit will be preformed and toFixed(3) is used to round each value to 3 decimal places. The conversions for each individual unit are all assigned to textContent values of <p> elements within the appropriate containers.
