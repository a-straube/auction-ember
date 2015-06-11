Auction.Router.map(function() {
  this.resource('auction-items', {path: '/'});
  this.resource('new-auction-item');
  this.resource('item', {path: 'item/:item_id'});
});
