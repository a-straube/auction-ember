Auction.AuctionItemsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('item');
  }
});
