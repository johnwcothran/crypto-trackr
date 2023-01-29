
describe('Home page spec', () => {
  it('Renders top cryptos correctly', () => {
    cy.visit('http://localhost:3000');
    const cryptoCards = cy.get('div').filter('[data-testid="crypto-card"]');
    cryptoCards.should('have.length', 12);
  });
});

describe('Detail page spec', () => {
  it('Renders detail crypto card correctly', () => {
    cy.visit('http://localhost:3000/bitcoin');

    const cryptoCards = cy.get('div').filter('[data-testid="crypto-card"]');
    cryptoCards.should('have.length', 1);
    cryptoCards.find('[data-testid="crypto-price"]').should('contain.text', "$");
  });

  it('Renders similar cryptos correctly', () => {
    cy.visit('http://localhost:3000/bitcoin');

    const similarCryptoTitle = cy.get('#content').find('[data-testid="similar-cryptos-title"]');
    similarCryptoTitle.should('have.text', 'Similar Cryptos');

    const similarCryptos = cy.get('a').filter('[data-testid="similar-crypto"]');
    similarCryptos.should('have.length', 9);
  });

  it('Renders crypto history correctly', () => {
    cy.visit('http://localhost:3000/bitcoin');

    const cryptoHistory = cy.get('#content').find('[data-testid="crypto-history-title"]');
    cryptoHistory.should('have.text', 'Bitcoin History');

    const cryptoHistoryChart = cy.get('#content').find('[data-testid="crypto-history-chart"]');
    cryptoHistoryChart.should('exist');

    const cryptoHistoryChartControls = cy.get('button').filter('[data-testid="crypto-history-chart-controls"]').filter('.border-orange-400');
    cryptoHistoryChartControls.should('have.text', 'Per Day');

    
  });

});


export {}