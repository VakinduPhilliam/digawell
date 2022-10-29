
# Dig A Well:

Dig a well is a platform built to improve access to clean water in remote communities by highlighting places on Google Maps where new waterholes should be dug.

Globally 2.3 billion people lack access to safe, readily available water and 1.5 million livestock are lost per year to acute drought (in Kenya alone). Dig a well is built to highlight deficiencies in water access.

Person's living in affected communities submit a gps location of where a well needs to be dung, we verify the location. The verified location is then added to the platform's json database and plotted on google maps, where person's interested can help dig the well.

<br/>

_Dig A Well User Interface:_

![Dig A Well](/public/ui.png)

<br/>

## Map Guide:

Explaining the markers symbols on the map.

</br>

- ![Dig a Well](/public/well_2_icon.png) - Waterhole digging hasn't begun.

<br/>

- ![Digging in progress](/public/well_3_icon.png) - Waterhole digging in progress.

<br/>

- ![Well is Complete](/public/well_1_icon.png) - Waterhole is Complete.

<br/>

**Beneficiaries (Families):** Also listed along with each marker title are the number of potential family beneficiaries after the waterholes' completion.

**Add new Waterhole:** Users can also submit new waterhole locations to the map by clicking **+ Add**

<br/>

## Installation:

Install the following applications on your PC before installing Dig a Well.

- [Node.JS](https://nodejs.org/en/download/current/), 

</br>

### Download or Clone Dig A Well from Github:

Go to https://github.com/VakinduPhilliam/digawell and download or clone Dig a Well's core app.

</br>

### Install NPM dependencies:

Open the unzipped or cloned Dig A Well app folder in your favorite code editor and install the app's npm dependency modules. 

_npm install_

</br>

### Running the App:

To run the app, execute the command below in the Command terminal. 

_node index.js_

</br>

You should see a message like, "Server running on port: 5900" in your command terminal if the app is running successfully.

Open your browser and visit, http://localhost:5900/ to view the app.
(You must be online for the app to fetch the Google API and function properly.)

