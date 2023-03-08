describe('Test node interactions', () => {
  it('Register 2 new nodes', () => {
    cy.login('admin', 'admin')
    cy.clickNavigation('Nodes')
    cy.registerNode('cypressTestNode:91', 'localhost:91')
    cy.wait(100000)
    cy.registerNode('cypressTestNode:92', 'localhost:92')
    cy.wait(100000)
  })
})
