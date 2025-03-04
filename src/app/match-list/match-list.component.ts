import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  matches: any[] = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.ApiService.getMatchList().subscribe(data => {
      this.matches = data;
    });
  }

  updateScore(match: any, newScore: number): void {
    this.ApiService.updateMatchScore(match.id, newScore).subscribe(updatedMatch => {
      match.score = updatedMatch.score;
    });
  }
}
