Auction.NewAuctionItemController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newAuctionItem = this.store.createRecord('item', {
        image: this.get('image'),
        title: this.get('title'),
        price: this.get('price'),
        description: this.get('description')
      });

      newAuctionItem.save();
      this.transitionToRoute('auction-items');
    }
  }
});
