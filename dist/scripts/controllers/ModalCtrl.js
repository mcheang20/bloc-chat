(function() {
     function ModalCtrl($uibModal, Room) {
         console.log(Room);
        this.items = Room;
        this.chatRoomName = "New Chatroom";

        this.animationsEnabled = true;
         
        this.open = function (size) {
          var modalInstance = $uibModal.open({
              animation: this.animationsEnabled,
              ariaLabelledBy: 'modal-title',
              ariaDescribedBy: 'modal-body',
              templateUrl: 'create.html',
              controller: 'ModalCtrl',
              controllerAs: 'create',
              close: '&',
              dismiss: '&',
              size: size,
              controller: function($scope, $uibModalInstance){
                this.close = function(){
                  $uibModalInstance.dismiss('cancel');
                  $uibModalInstance.close();
              }
                
                 this.addRoom = function( roomNameFromModal ){
                  Room.add( roomNameFromModal );
                  this.close();
                }
                 
              },
              resolve: {
                items: function () {
                  return this.items;
                }
              }      
           });
        }
     }
  
     angular
         .module('blocChat')
         .controller('ModalCtrl', ['$uibModal', 'Room', ModalCtrl]);
 })();
