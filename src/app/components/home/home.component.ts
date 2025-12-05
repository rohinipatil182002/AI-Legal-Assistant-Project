import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  quickActions = [
    {
      icon: 'assets/Images/Icon (1).svg',
      title: 'AI_ASSISTANT',
      description: 'AI_ASSISTANT_DESC',
      color: '#3b82f6',
       route: '/ai-assistant'
    },
    {
      icon: 'assets/Images/Icon (2).svg',
      title: 'GENERATE_DOCUMENT',
      description: 'GENERATE_DOCUMENT_DESC',
      color: '#10b981',
      route: '/generate-document'
    },
    {
      icon: 'assets/Images/Icon (3).svg',
      title: 'SUMMARIZE',
      description: 'SUMMARIZE_DESC',
      color: '#a855f7',
      route: '/summarize'
    },
    {
      icon: 'assets/Images/Icon (4).svg',
      title: 'REGULATIONS',
      description: 'REGULATIONS_DESC',
      color: '#f97316',
      route: '/regulations'
    }
  ];

  recentSearches = [
    {
      title: 'RECENT_TITLE_1',
      time: '2 hours ago'
    },
     {
      title: 'RECENT_TITLE_2',
      time: '5 hours ago'
    },
     {
      title: 'RECENT_TITLE_3',
      time: '1 day ago'
    },
     {
      title: 'RECENT_TITLE_4',
      time: '2 day ago'
    }
  ];

  legalUpdates = [
    {
      title: 'UPDATE_TITLE_1',
      description: 'UPDATE_DESC_1'
    },
    {
      title: 'UPDATE_TITLE_2',
      description: 'UPDATE_DESC_2'
    }
  ];
}
