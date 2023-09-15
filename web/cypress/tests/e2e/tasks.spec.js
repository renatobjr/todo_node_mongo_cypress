/// <reference types="cypress" />

describe('Tasks flow', () => {
  beforeEach(() => {
    cy.resetDatabase();
  })
  it('should request api server', () => {
    cy.request('http://localhost:3000');
  })

  it('should access main page', () => {
    cy.visit('http://localhost:8080');
  })

  it('should not create a task without a description and priority', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="btn-create-task"]').click()
    cy.get('.v-messages__message').should('have.length', 2)
  })

  it('should not create a task without a description', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(0).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('.v-messages__message').should('have.length', 1);
  });

  it('should not create a task without select a priority', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="input-task-description"]').type('Cypress input test');
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('.v-messages__message').should('have.length', 1);
  });

  it('should create a new task with low priority', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="input-task-description"]').type('Cypress input test');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(0).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('[data-test="list-item-task"]').should('have.length', 1);
    cy.get('[data-test="icon-task-priority"]').should('have.class', 'low');
  });

  it('should create a new task with normal priority', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="input-task-description"]').type('Cypress input test');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(1).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('[data-test="list-item-task"]').should('have.length', 1);
    cy.get('[data-test="icon-task-priority"]').should('have.class', 'normal');
  });

  it('should create a new task with urgent priority', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="input-task-description"]').type('Cypress input test');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(2).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('[data-test="list-item-task"]').should('have.length', 1);
    cy.get('[data-test="icon-task-priority"]').should('have.class', 'urgent');
  });

  it('should create a new task with low priority and mark as done', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="input-task-description"]').type('Cypress input test');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(0).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('[data-test="list-item-task"]').should('have.length', 1);
    cy.get('[data-test="icon-task-priority"]').should('have.class', 'low');
    cy.get('[data-test="btn-mark-as-done-task"]').click();
    cy.get('[data-test="list-item-task"]').should('have.length', 0);
    cy.get('[data-test="snackbar-component-task"]').should('exist');
    cy.get('[data-test="snackbar-span-message"]').should('contain', 'It\'s done!');
  });

  it('should create a new task with low priority and editing with new description and new priority', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="input-task-description"]').type('Cypress input test');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(0).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('[data-test="snackbar-btn-dismiss"]').click();
    cy.get('[data-test="list-item-task"]').should('have.length', 1);
    cy.get('[data-test="icon-task-priority"]').should('have.class', 'low');
    cy.get('[data-test="btn-edit-task"]').click();
    cy.get('[data-test="input-task-description"]').clear();
    cy.get('[data-test="input-task-description"]').type('Editing the description');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(2).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('[data-test="snackbar-component-task"]').should('exist');
    cy.get('[data-test="snackbar-span-message"]').should('contain', 'Task updated!');
    cy.get('[data-test="list-item-task"]').should('have.length', 1);
    cy.get('[data-test="list-title-task"]').should('contain', 'Editing the description');
    cy.get('[data-test="icon-task-priority"]').should('have.class', 'normal');
  });

  it('should create a new task with low priority and delete it', () => {
    cy.visit('http://localhost:8080');
    cy.get('[data-test="input-task-description"]').type('Cypress input test');
    cy.get('[data-test="select-task-priority"]').click();
    cy.get('.v-list-item-title').eq(0).click();
    cy.get('[data-test="btn-create-task"]').click();
    cy.get('[data-test="snackbar-btn-dismiss"]').click();
    cy.get('[data-test="list-item-task"]').should('have.length', 1);
    cy.get('[data-test="icon-task-priority"]').should('have.class', 'low');
    cy.get('[data-test="btn-remove-task"]').click();
    cy.get('[data-test="btn-delete-task"]').click();
    cy.get('[data-test="snackbar-component-task"]').should('exist');
    cy.get('[data-test="snackbar-span-message"]').should('contain', 'Task removed!');
    cy.get('[data-test="list-item-task"]').should('have.length', 0);
  });
})
