import { Component } from '@angular/core';

@Component({
  selector: 'app-regulations',
  templateUrl: './regulations.component.html',
  styleUrls: ['./regulations.component.css']
})
export class RegulationsComponent {
  categories = [
    'All Categories',
    'Commercial Law',
    'Criminal Law',
    'Civil Law',
    'Labor Law'
  ];

  selectedCategory = 'All Categories';

  regulations = [
    {
      id: 1,
      category: 'Commercial Law',
      title: 'Commercial Courts Law',
      desc: 'This law regulates commercial courts and commercial disputes in the Kingdom of Saudi Arabia.',
      articles: [
        { number: 1, title: 'Court Establishment', text: 'Commercial courts shall be established by a decision of the Supreme Judicial Council to adjudicate commercial disputes.' },
        { number: 2, title: 'Jurisdiction', text: 'Commercial courts shall have jurisdiction over all commercial disputes including company disputes, bankruptcy cases, and commercial transactions.' },
        { number: 3, title: 'Appeal Procedures', text: 'Judgments issued by commercial courts may be appealed to the Commercial Court of Appeal within thirty days from the date of notification.' }
      ],
      relatedLaws: [
      { title: 'Companies Law' },
      { title: 'Bankruptcy Law' },
      { title: 'Commercial Registration Law' }
    ],
      version: 'v1.2'
    },
    {
      id: 2,
      category: 'Labor Law',
      title: 'Labor Law',
      desc: 'This law regulates the relationship between employers and employees in the Kingdom.',
      articles: [
        { number: 1, title: 'Application Scope', text: 'This law applies to every employee working for an employer in the Kingdom, except for specific categories mentioned in the law.' },
        { number: 2, title: 'Employment Contract', text: 'The employment contract must be written in Arabic and prepared in duplicate, with each party retaining one copy.' }
      ],
      relatedLaws: [
      { title: 'Social Insurance Law' },
      { title: 'Occupational Health and Safety Law' }
    ],
      version: 'v2.0'
    },
    {
      id: 3,
      category: 'Civil Law',
      title: 'Civil Transactions Law',
      desc: 'This law regulates civil transactions and obligations between individuals.',
      articles: [
        { number: 1, title: 'Contract Formation', text: 'A contract is formed when an offer is accepted in a manner that indicates consent.' }
      ],
      relatedLaws: [
      { title: 'Real Estate Law' },
      { title: 'Personal Status Law' }
    ],
      version: 'v1.5'
    },
    {
      id: 4,
      category: 'Criminal Law',
      title: 'Criminal Procedures Law',
      desc: 'This law regulates criminal investigation and trial procedures.',
      articles: [
        { number: 1, title: 'Investigation Authority', text: 'The Public Prosecution shall conduct investigations in criminal cases according to the provisions of this law.' }
      ],
      relatedLaws: [
      { title: 'Law of Criminal Procedure' },
      { title: 'Evidence Law' }
    ],
      version: 'v1.8'
    }
  ];

  filteredRegulations = [...this.regulations];

  selectedRegulation: any = null;

  selectCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'All Categories') {
      this.filteredRegulations = [...this.regulations];
    } else {
      this.filteredRegulations = this.regulations.filter(
        r => r.category === category
      );
    }

    this.selectedRegulation = null;
  }

  openDetails(regulation: any) {
    this.selectedRegulation = regulation;
  }
}
