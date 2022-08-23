
import { evalPoints } from "../../utils/converter";

describe("Transaction Converter Utils",()=>{
    test("should return an object with months and points",()=>{

        const expectedData = {
            'September':5,
            'October': 40,
            'August': 190
        }

        const transactionsData = [{
            "amount": 120,
            "date": "10-12-2022"
          },
          {
            "amount": 55,
            "date": "09-13-2022"
          },
          {
            "amount": 180,
            "date": "08-14-2022"
          }]
        expect(evalPoints(transactionsData)).toEqual(expectedData);
    })
})