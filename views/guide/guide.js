/**
 * Created by hxsd on 2016/7/7.
 */
myApp.controller("guideCtrl", function ($scope, $ionicSlideBoxDelegate,$ionicModal) {
    $scope.isShow=false;

    $ionicModal.fromTemplateUrl("my-modal.html", {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.contacts = [];
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    $scope.newContact = {};

    $scope.addContact = function () {
        if($scope.newContact.addName!=""){
            userName=$scope.newContact.addName;
            $scope.userName=userName;
            //alert($scope.userName);
        }
        $scope.contacts.push({name: $scope.newContact.addName, email: $scope.newContact.addEmail});
        $scope.newContact.addName = "";
        $scope.newContact.addEmail = "";
        $scope.modal.hide();
    };

    // 当离开这个页面时，销毁模态窗口，防止内存溢出
    $scope.$on('$destroy', function () {
        $scope.modal.remove();  // 释放内存
    });

    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
        // Execute action
    });





    $scope.checkShow= function () {
        if($ionicSlideBoxDelegate.currentIndex()==$ionicSlideBoxDelegate.slidesCount()-1){
            $scope.isShow=true;
            $scope.modal.show();
        }else {
            $scope.isShow=false;
        }
    };




});