//Constantes
const ENDPOINT = "https://kairos-rim.kiwibot.com/";
const STATUS_CREATED = 201;
const STATUS_OK = 200;
const BOT_ID = "kiwibot4X001";

function setUrl(url) {
       return `${ENDPOINT}${url ? url : ""}`;
    }

//Get delivery test
describe("getRobotParams", () => {
    it("should get the robot params", () => {
      const GETROBOTS_URL = setUrl(`/params/${BOT_ID}`);
      cy.request("GET", GETROBOTS_URL).then((response) => {
        expect(response.status).to.eq(STATUS_CREATED);
      });
    });

    it("should get the robot information", () => {
        const GETROBOTS_URL = setUrl(`/information`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_CREATED);
        });
      });
      it("should get the robot information in paginations", () => {
        const GETROBOTS_URL = setUrl(`/information/paginated?startdate=2023-05-01&enddate=2023-05-22&page=1&limit=100`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_CREATED);
        });
      });
      it("should get the robot hb", () => {
        const GETROBOTS_URL = setUrl(`/hb/${BOT_ID}`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_CREATED);
        });
      });
      it("should get the robot's door status", () => {
        const GETROBOTS_URL = setUrl(`/status/door/${BOT_ID}`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_CREATED);
        });
      });

      it("should get the robot's zone", () => {
        const GETROBOTS_URL = setUrl(`/zone/${BOT_ID}`);
        cy.request("GET", GETROBOTS_URL).then((response) => {
          expect(response.status).to.eq(STATUS_CREATED);
        });
      });
    



  });