import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts = [
    {
      title: 'Mon premier post',
      content : 'Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d ennuis te seront épargnés.',
      loveIts : 0,
      createdAt : new Date()
    },
    {
      title: 'Mon deuxième post',
      content : 'On passe une moitié de sa vie à attendre ceux qu on aimera et l autre moitié à quitter ceux qu on aime.',
      loveIts : -3,
      createdAt : new Date()
    },
    {
      title: 'Encore un post',
      content: 'Le monde est dangereux à vivre ! Non pas tant à cause de ceux qui font le mal, mais à cause de ceux qui regardent et laissent faire.',
      loveIts: 1,
      createdAt: new Date()
    }
  ];
}