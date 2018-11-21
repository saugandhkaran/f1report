import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HistoryReportService } from './history-report.service';

describe('HistoryReportService', () => {
let injector: TestBed;
let service: HistoryReportService;
let httpMock: HttpTestingController;

  beforeEach(() => { 
    TestBed.configureTestingModule({
      providers: [HistoryReportService],
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    service = injector.get(HistoryReportService);
    httpMock = injector.get(HttpTestingController);
});
  it('should be created', () => {
    const service: HistoryReportService = TestBed.get(HistoryReportService);
    expect(service).toBeTruthy();
  });

  it('should return the champion List result', () => {
    let output = {"MRData":{"xmlns":"http:\/\/ergast.com\/mrd\/1.4","series":"f1","url":"http://ergast.com/api/f1/2008/driverstandings.json","limit":"30","offset":"0","total":"22","StandingsTable":{"season":"2008","StandingsLists":[{"season":"2008","round":"18","DriverStandings":[{"position":"1","positionText":"1","points":"98","wins":"5","Driver":{"driverId":"hamilton","permanentNumber":"44","code":"HAM","url":"http:\/\/en.wikipedia.org\/wiki\/Lewis_Hamilton","givenName":"Lewis","familyName":"Hamilton","dateOfBirth":"1985-01-07","nationality":"British"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"2","positionText":"2","points":"97","wins":"6","Driver":{"driverId":"massa","permanentNumber":"19","code":"MAS","url":"http:\/\/en.wikipedia.org\/wiki\/Felipe_Massa","givenName":"Felipe","familyName":"Massa","dateOfBirth":"1981-04-25","nationality":"Brazilian"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"3","positionText":"3","points":"75","wins":"2","Driver":{"driverId":"raikkonen","permanentNumber":"7","code":"RAI","url":"http:\/\/en.wikipedia.org\/wiki\/Kimi_R%C3%A4ikk%C3%B6nen","givenName":"Kimi","familyName":"Räikkönen","dateOfBirth":"1979-10-17","nationality":"Finnish"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"4","positionText":"4","points":"75","wins":"1","Driver":{"driverId":"kubica","code":"KUB","url":"http:\/\/en.wikipedia.org\/wiki\/Robert_Kubica","givenName":"Robert","familyName":"Kubica","dateOfBirth":"1984-12-07","nationality":"Polish"},              "Constructors":[{"constructorId":"bmw_sauber","url":"http:\/\/en.wikipedia.org\/wiki\/BMW_Sauber","name":"BMW Sauber","nationality":"German"}]},{"position":"5","positionText":"5","points":"61","wins":"2","Driver":{"driverId":"alonso","permanentNumber":"14","code":"ALO","url":"http:\/\/en.wikipedia.org\/wiki\/Fernando_Alonso","givenName":"Fernando","familyName":"Alonso","dateOfBirth":"1981-07-29","nationality":"Spanish"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"6","positionText":"6","points":"60","wins":"0","Driver":{"driverId":"heidfeld","code":"HEI","url":"http:\/\/en.wikipedia.org\/wiki\/Nick_Heidfeld","givenName":"Nick","familyName":"Heidfeld","dateOfBirth":"1977-05-10","nationality":"German"},              "Constructors":[{"constructorId":"bmw_sauber","url":"http:\/\/en.wikipedia.org\/wiki\/BMW_Sauber","name":"BMW Sauber","nationality":"German"}]},{"position":"7","positionText":"7","points":"53","wins":"1","Driver":{"driverId":"kovalainen","code":"KOV","url":"http:\/\/en.wikipedia.org\/wiki\/Heikki_Kovalainen","givenName":"Heikki","familyName":"Kovalainen","dateOfBirth":"1981-10-19","nationality":"Finnish"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"8","positionText":"8","points":"35","wins":"1","Driver":{"driverId":"vettel","permanentNumber":"5","code":"VET","url":"http:\/\/en.wikipedia.org\/wiki\/Sebastian_Vettel","givenName":"Sebastian","familyName":"Vettel","dateOfBirth":"1987-07-03","nationality":"German"},              "Constructors":[{"constructorId":"toro_rosso","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Toro_Rosso","name":"Toro Rosso","nationality":"Italian"}]},{"position":"9","positionText":"9","points":"31","wins":"0","Driver":{"driverId":"trulli","code":"TRU","url":"http:\/\/en.wikipedia.org\/wiki\/Jarno_Trulli","givenName":"Jarno","familyName":"Trulli","dateOfBirth":"1974-07-13","nationality":"Italian"},              "Constructors":[{"constructorId":"toyota","url":"http:\/\/en.wikipedia.org\/wiki\/Toyota_Racing","name":"Toyota","nationality":"Japanese"}]},{"position":"10","positionText":"10","points":"25","wins":"0","Driver":{"driverId":"glock","code":"GLO","url":"http:\/\/en.wikipedia.org\/wiki\/Timo_Glock","givenName":"Timo","familyName":"Glock","dateOfBirth":"1982-03-18","nationality":"German"},              "Constructors":[{"constructorId":"toyota","url":"http:\/\/en.wikipedia.org\/wiki\/Toyota_Racing","name":"Toyota","nationality":"Japanese"}]},{"position":"11","positionText":"11","points":"21","wins":"0","Driver":{"driverId":"webber","code":"WEB","url":"http:\/\/en.wikipedia.org\/wiki\/Mark_Webber","givenName":"Mark","familyName":"Webber","dateOfBirth":"1976-08-27","nationality":"Australian"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]},{"position":"12","positionText":"12","points":"19","wins":"0","Driver":{"driverId":"piquet_jr","code":"PIQ","url":"http:\/\/en.wikipedia.org\/wiki\/Nelson_Piquet,_Jr.","givenName":"Nelson","familyName":"Piquet Jr.","dateOfBirth":"1985-07-25","nationality":"Brazilian"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"13","positionText":"13","points":"17","wins":"0","Driver":{"driverId":"rosberg","permanentNumber":"6","code":"ROS","url":"http:\/\/en.wikipedia.org\/wiki\/Nico_Rosberg","givenName":"Nico","familyName":"Rosberg","dateOfBirth":"1985-06-27","nationality":"German"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]},{"position":"14","positionText":"14","points":"11","wins":"0","Driver":{"driverId":"barrichello","code":"BAR","url":"http:\/\/en.wikipedia.org\/wiki\/Rubens_Barrichello","givenName":"Rubens","familyName":"Barrichello","dateOfBirth":"1972-05-23","nationality":"Brazilian"},              "Constructors":[{"constructorId":"honda","url":"http:\/\/en.wikipedia.org\/wiki\/Honda_Racing_F1","name":"Honda","nationality":"Japanese"}]},{"position":"15","positionText":"15","points":"9","wins":"0","Driver":{"driverId":"nakajima","code":"NAK","url":"http:\/\/en.wikipedia.org\/wiki\/Kazuki_Nakajima","givenName":"Kazuki","familyName":"Nakajima","dateOfBirth":"1985-01-11","nationality":"Japanese"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]},{"position":"16","positionText":"16","points":"8","wins":"0","Driver":{"driverId":"coulthard","code":"COU","url":"http:\/\/en.wikipedia.org\/wiki\/David_Coulthard","givenName":"David","familyName":"Coulthard","dateOfBirth":"1971-03-27","nationality":"British"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]},{"position":"17","positionText":"17","points":"4","wins":"0","Driver":{"driverId":"bourdais","code":"BOU","url":"http:\/\/en.wikipedia.org\/wiki\/S%C3%A9bastien_Bourdais","givenName":"Sébastien","familyName":"Bourdais","dateOfBirth":"1979-02-28","nationality":"French"},              "Constructors":[{"constructorId":"toro_rosso","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Toro_Rosso","name":"Toro Rosso","nationality":"Italian"}]},{"position":"18","positionText":"18","points":"3","wins":"0","Driver":{"driverId":"button","permanentNumber":"22","code":"BUT","url":"http:\/\/en.wikipedia.org\/wiki\/Jenson_Button","givenName":"Jenson","familyName":"Button","dateOfBirth":"1980-01-19","nationality":"British"},              "Constructors":[{"constructorId":"honda","url":"http:\/\/en.wikipedia.org\/wiki\/Honda_Racing_F1","name":"Honda","nationality":"Japanese"}]},{"position":"19","positionText":"19","points":"0","wins":"0","Driver":{"driverId":"fisichella","code":"FIS","url":"http:\/\/en.wikipedia.org\/wiki\/Giancarlo_Fisichella","givenName":"Giancarlo","familyName":"Fisichella","dateOfBirth":"1973-01-14","nationality":"Italian"},              "Constructors":[{"constructorId":"force_india","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_Force_India","name":"Force India","nationality":"Indian"}]},{"position":"20","positionText":"20","points":"0","wins":"0","Driver":{"driverId":"sutil","permanentNumber":"99","code":"SUT","url":"http:\/\/en.wikipedia.org\/wiki\/Adrian_Sutil","givenName":"Adrian","familyName":"Sutil","dateOfBirth":"1983-01-11","nationality":"German"},              "Constructors":[{"constructorId":"force_india","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_Force_India","name":"Force India","nationality":"Indian"}]},{"position":"21","positionText":"21","points":"0","wins":"0","Driver":{"driverId":"sato","code":"SAT","url":"http:\/\/en.wikipedia.org\/wiki\/Takuma_Sato","givenName":"Takuma","familyName":"Sato","dateOfBirth":"1977-01-28","nationality":"Japanese"},              "Constructors":[{"constructorId":"super_aguri","url":"http:\/\/en.wikipedia.org\/wiki\/Super_Aguri_F1","name":"Super Aguri","nationality":"Japanese"}]},{"position":"22","positionText":"22","points":"0","wins":"0","Driver":{"driverId":"davidson","code":"DAV","url":"http:\/\/en.wikipedia.org\/wiki\/Anthony_Davidson","givenName":"Anthony","familyName":"Davidson","dateOfBirth":"1979-04-18","nationality":"British"},              "Constructors":[{"constructorId":"super_aguri","url":"http:\/\/en.wikipedia.org\/wiki\/Super_Aguri_F1","name":"Super Aguri","nationality":"Japanese"}]}]}]}}};
    service.getChampionsList(2008).subscribe((result) => {
      expect(result).toBe(output);
    })
  })

  it('should return the season result List', () => {
    let output = {"MRData":{"xmlns":"http:\/\/ergast.com\/mrd\/1.4","series":"f1","url":"http://ergast.com/api/f1/2008/driverstandings.json","limit":"30","offset":"0","total":"22","StandingsTable":{"season":"2008","StandingsLists":[{"season":"2008","round":"18","DriverStandings":[{"position":"1","positionText":"1","points":"98","wins":"5","Driver":{"driverId":"hamilton","permanentNumber":"44","code":"HAM","url":"http:\/\/en.wikipedia.org\/wiki\/Lewis_Hamilton","givenName":"Lewis","familyName":"Hamilton","dateOfBirth":"1985-01-07","nationality":"British"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"2","positionText":"2","points":"97","wins":"6","Driver":{"driverId":"massa","permanentNumber":"19","code":"MAS","url":"http:\/\/en.wikipedia.org\/wiki\/Felipe_Massa","givenName":"Felipe","familyName":"Massa","dateOfBirth":"1981-04-25","nationality":"Brazilian"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"3","positionText":"3","points":"75","wins":"2","Driver":{"driverId":"raikkonen","permanentNumber":"7","code":"RAI","url":"http:\/\/en.wikipedia.org\/wiki\/Kimi_R%C3%A4ikk%C3%B6nen","givenName":"Kimi","familyName":"Räikkönen","dateOfBirth":"1979-10-17","nationality":"Finnish"},              "Constructors":[{"constructorId":"ferrari","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Ferrari","name":"Ferrari","nationality":"Italian"}]},{"position":"4","positionText":"4","points":"75","wins":"1","Driver":{"driverId":"kubica","code":"KUB","url":"http:\/\/en.wikipedia.org\/wiki\/Robert_Kubica","givenName":"Robert","familyName":"Kubica","dateOfBirth":"1984-12-07","nationality":"Polish"},              "Constructors":[{"constructorId":"bmw_sauber","url":"http:\/\/en.wikipedia.org\/wiki\/BMW_Sauber","name":"BMW Sauber","nationality":"German"}]},{"position":"5","positionText":"5","points":"61","wins":"2","Driver":{"driverId":"alonso","permanentNumber":"14","code":"ALO","url":"http:\/\/en.wikipedia.org\/wiki\/Fernando_Alonso","givenName":"Fernando","familyName":"Alonso","dateOfBirth":"1981-07-29","nationality":"Spanish"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"6","positionText":"6","points":"60","wins":"0","Driver":{"driverId":"heidfeld","code":"HEI","url":"http:\/\/en.wikipedia.org\/wiki\/Nick_Heidfeld","givenName":"Nick","familyName":"Heidfeld","dateOfBirth":"1977-05-10","nationality":"German"},              "Constructors":[{"constructorId":"bmw_sauber","url":"http:\/\/en.wikipedia.org\/wiki\/BMW_Sauber","name":"BMW Sauber","nationality":"German"}]},{"position":"7","positionText":"7","points":"53","wins":"1","Driver":{"driverId":"kovalainen","code":"KOV","url":"http:\/\/en.wikipedia.org\/wiki\/Heikki_Kovalainen","givenName":"Heikki","familyName":"Kovalainen","dateOfBirth":"1981-10-19","nationality":"Finnish"},              "Constructors":[{"constructorId":"mclaren","url":"http:\/\/en.wikipedia.org\/wiki\/McLaren","name":"McLaren","nationality":"British"}]},{"position":"8","positionText":"8","points":"35","wins":"1","Driver":{"driverId":"vettel","permanentNumber":"5","code":"VET","url":"http:\/\/en.wikipedia.org\/wiki\/Sebastian_Vettel","givenName":"Sebastian","familyName":"Vettel","dateOfBirth":"1987-07-03","nationality":"German"},              "Constructors":[{"constructorId":"toro_rosso","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Toro_Rosso","name":"Toro Rosso","nationality":"Italian"}]},{"position":"9","positionText":"9","points":"31","wins":"0","Driver":{"driverId":"trulli","code":"TRU","url":"http:\/\/en.wikipedia.org\/wiki\/Jarno_Trulli","givenName":"Jarno","familyName":"Trulli","dateOfBirth":"1974-07-13","nationality":"Italian"},              "Constructors":[{"constructorId":"toyota","url":"http:\/\/en.wikipedia.org\/wiki\/Toyota_Racing","name":"Toyota","nationality":"Japanese"}]},{"position":"10","positionText":"10","points":"25","wins":"0","Driver":{"driverId":"glock","code":"GLO","url":"http:\/\/en.wikipedia.org\/wiki\/Timo_Glock","givenName":"Timo","familyName":"Glock","dateOfBirth":"1982-03-18","nationality":"German"},              "Constructors":[{"constructorId":"toyota","url":"http:\/\/en.wikipedia.org\/wiki\/Toyota_Racing","name":"Toyota","nationality":"Japanese"}]},{"position":"11","positionText":"11","points":"21","wins":"0","Driver":{"driverId":"webber","code":"WEB","url":"http:\/\/en.wikipedia.org\/wiki\/Mark_Webber","givenName":"Mark","familyName":"Webber","dateOfBirth":"1976-08-27","nationality":"Australian"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]},{"position":"12","positionText":"12","points":"19","wins":"0","Driver":{"driverId":"piquet_jr","code":"PIQ","url":"http:\/\/en.wikipedia.org\/wiki\/Nelson_Piquet,_Jr.","givenName":"Nelson","familyName":"Piquet Jr.","dateOfBirth":"1985-07-25","nationality":"Brazilian"},              "Constructors":[{"constructorId":"renault","url":"http:\/\/en.wikipedia.org\/wiki\/Renault_in_Formula_One","name":"Renault","nationality":"French"}]},{"position":"13","positionText":"13","points":"17","wins":"0","Driver":{"driverId":"rosberg","permanentNumber":"6","code":"ROS","url":"http:\/\/en.wikipedia.org\/wiki\/Nico_Rosberg","givenName":"Nico","familyName":"Rosberg","dateOfBirth":"1985-06-27","nationality":"German"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]},{"position":"14","positionText":"14","points":"11","wins":"0","Driver":{"driverId":"barrichello","code":"BAR","url":"http:\/\/en.wikipedia.org\/wiki\/Rubens_Barrichello","givenName":"Rubens","familyName":"Barrichello","dateOfBirth":"1972-05-23","nationality":"Brazilian"},              "Constructors":[{"constructorId":"honda","url":"http:\/\/en.wikipedia.org\/wiki\/Honda_Racing_F1","name":"Honda","nationality":"Japanese"}]},{"position":"15","positionText":"15","points":"9","wins":"0","Driver":{"driverId":"nakajima","code":"NAK","url":"http:\/\/en.wikipedia.org\/wiki\/Kazuki_Nakajima","givenName":"Kazuki","familyName":"Nakajima","dateOfBirth":"1985-01-11","nationality":"Japanese"},              "Constructors":[{"constructorId":"williams","url":"http:\/\/en.wikipedia.org\/wiki\/Williams_Grand_Prix_Engineering","name":"Williams","nationality":"British"}]},{"position":"16","positionText":"16","points":"8","wins":"0","Driver":{"driverId":"coulthard","code":"COU","url":"http:\/\/en.wikipedia.org\/wiki\/David_Coulthard","givenName":"David","familyName":"Coulthard","dateOfBirth":"1971-03-27","nationality":"British"},              "Constructors":[{"constructorId":"red_bull","url":"http:\/\/en.wikipedia.org\/wiki\/Red_Bull_Racing","name":"Red Bull","nationality":"Austrian"}]},{"position":"17","positionText":"17","points":"4","wins":"0","Driver":{"driverId":"bourdais","code":"BOU","url":"http:\/\/en.wikipedia.org\/wiki\/S%C3%A9bastien_Bourdais","givenName":"Sébastien","familyName":"Bourdais","dateOfBirth":"1979-02-28","nationality":"French"},              "Constructors":[{"constructorId":"toro_rosso","url":"http:\/\/en.wikipedia.org\/wiki\/Scuderia_Toro_Rosso","name":"Toro Rosso","nationality":"Italian"}]},{"position":"18","positionText":"18","points":"3","wins":"0","Driver":{"driverId":"button","permanentNumber":"22","code":"BUT","url":"http:\/\/en.wikipedia.org\/wiki\/Jenson_Button","givenName":"Jenson","familyName":"Button","dateOfBirth":"1980-01-19","nationality":"British"},              "Constructors":[{"constructorId":"honda","url":"http:\/\/en.wikipedia.org\/wiki\/Honda_Racing_F1","name":"Honda","nationality":"Japanese"}]},{"position":"19","positionText":"19","points":"0","wins":"0","Driver":{"driverId":"fisichella","code":"FIS","url":"http:\/\/en.wikipedia.org\/wiki\/Giancarlo_Fisichella","givenName":"Giancarlo","familyName":"Fisichella","dateOfBirth":"1973-01-14","nationality":"Italian"},              "Constructors":[{"constructorId":"force_india","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_Force_India","name":"Force India","nationality":"Indian"}]},{"position":"20","positionText":"20","points":"0","wins":"0","Driver":{"driverId":"sutil","permanentNumber":"99","code":"SUT","url":"http:\/\/en.wikipedia.org\/wiki\/Adrian_Sutil","givenName":"Adrian","familyName":"Sutil","dateOfBirth":"1983-01-11","nationality":"German"},              "Constructors":[{"constructorId":"force_india","url":"http:\/\/en.wikipedia.org\/wiki\/Racing_Point_Force_India","name":"Force India","nationality":"Indian"}]},{"position":"21","positionText":"21","points":"0","wins":"0","Driver":{"driverId":"sato","code":"SAT","url":"http:\/\/en.wikipedia.org\/wiki\/Takuma_Sato","givenName":"Takuma","familyName":"Sato","dateOfBirth":"1977-01-28","nationality":"Japanese"},              "Constructors":[{"constructorId":"super_aguri","url":"http:\/\/en.wikipedia.org\/wiki\/Super_Aguri_F1","name":"Super Aguri","nationality":"Japanese"}]},{"position":"22","positionText":"22","points":"0","wins":"0","Driver":{"driverId":"davidson","code":"DAV","url":"http:\/\/en.wikipedia.org\/wiki\/Anthony_Davidson","givenName":"Anthony","familyName":"Davidson","dateOfBirth":"1979-04-18","nationality":"British"},              "Constructors":[{"constructorId":"super_aguri","url":"http:\/\/en.wikipedia.org\/wiki\/Super_Aguri_F1","name":"Super Aguri","nationality":"Japanese"}]}]}]}}};
    service.getSeasonResult('2008').subscribe((result) => {
      expect(result).toBe(output);
    })
  })
});
