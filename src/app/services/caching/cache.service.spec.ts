import { TestBed } from '@angular/core/testing';

import { CacheService } from './cache.service';
import { SeasonChampion } from '../../shared/models/season-champion.model';
import { Driver } from '../../shared/models/driver.model';
import { Constructors } from '../../shared/models/constructors.model';

describe('CacheService', () => {
  let cacheService: CacheService ; 
  beforeEach(() => {
    cacheService = new CacheService();
  });
  afterEach(() => { 
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    const service: CacheService = TestBed.get(CacheService);
    expect(service).toBeTruthy();
  });

  it('setDataInLocalStorage should be undefined',() => {
    let data = ['1234'];
    expect(cacheService.setDataInLocalStorage(data)).toEqual(undefined);
  });
  
  it('should get data from localStorage', () => {
    localStorage.setItem('championList', '[1234]');
    let a: SeasonChampion[] = JSON.parse(localStorage.getItem('championList'));
    expect(cacheService.getDataFromLocalStorage()).toEqual(a);
  });

  it('should sort the Champion List', () => {
    let data: SeasonChampion[] = [
      {
        DriverStandings: [ {
          Driver: {
            code: 'POR',
            dateOfBirth: '14-08-1999',
            driverid: 'REK',
            familyName: 'LIM',
            givenName: 'TOM',
            nationality: 'RUS',
          },
          Constructors: {constructorId: 'FER',
            name: 'RANDOM',
            nationality: 'RUS',},
          points: 1,
          wins: 2
        } ],
        round: 1,
        season: 2016
      },
      {
      DriverStandings: [ {
        Driver: {code: 'KIM',
          dateOfBirth: '14-08-1993',
          driverid: 'REK',
          familyName: 'LIM',
          givenName: 'TOM',
          nationality: 'RUS',
        },
        Constructors: {constructorId: 'FER',
          name: 'RANDOM',
          nationality: 'RUS',},
        points: 1,
        wins: 2
      } ],
      round: 1,
      season: 2015
    }
    ];

    let output:  SeasonChampion[] = [{
      DriverStandings: [ {
        Driver: {code: 'KIM',
          dateOfBirth: '14-08-1993',
          driverid: 'REK',
          familyName: 'LIM',
          givenName: 'TOM',
          nationality: 'RUS',
        },
        Constructors: {constructorId: 'FER',
          name: 'RANDOM',
          nationality: 'RUS',},
        points: 1,
        wins: 2
      } ],
      round: 1,
      season: 2015
    }, {
      DriverStandings: [ {
        Driver: {code: 'POR',
          dateOfBirth: '14-08-1999',
          driverid: 'REK',
          familyName: 'LIM',
          givenName: 'TOM',
          nationality: 'RUS',
        },
        Constructors: {constructorId: 'FER',
          name: 'RANDOM',
          nationality: 'RUS',},
        points: 1,
        wins: 2
      } ],
      round: 1,
      season: 2016
    }
    ]

    expect(cacheService.sortTheChampionList(data)).toEqual(output);
  });


});
