import {createRouter, createWebHistory} from 'vue-router';
import LoginPage from '@/pages/member/LoginPage.vue';
import LogoutPage from "@/pages/member/LogoutPage";
import SignupPage from '@/pages/member/SignupPage.vue';
import DeliveryComponent from '@/components/member/DeliveryComponent.vue';
import ProductDetailPage from '@/pages/product/ProductDetailPage';
import CartComponent from '@/components/order/CartComponent.vue';
import MyFavoriteListComponent from '@/components/mypage/MyFavoriteListComponent.vue';
import MyPage from '@/pages/mypage/MyPage.vue';
import MainPage from '@/pages/MainPage';
import OrderPayment from '@/pages/payment/OrderPaymentPage';
import PresentPayment from '@/pages/payment/PresentPaymentPage';
import AtelierPage from '@/pages/atelier/AtelierPage';
import AskCommentComponent from '@/components/AskCommentComponent.vue';
import EmailFindPage from '@/pages/member/MemberEmailFindPage';
import ProductList from '@/pages/product/ProductListPage';
import GradeComponent from '@/components/mypage/GradeComponent.vue';
import ProductDetailPayementComponent from '@/components/product/ProductDetailPaymentComponent';
import LoginCallBackComponent from '@/components/member/LoginCallBackComponent';
import GiftGiveList from '@/components/gift/GiftGiveListComponent';
import GiftGiveDetail from '@/components/gift/GiftGiveDetailComponent';
import GiftReceivedList from '@/components/gift/GiftReceivedListComponent';
import GiftReceivedDetail from '@/components/gift/GiftReceivedDetailComponent';

import {useMemberStore} from '@/stores/useMemberStore';
import CategoryProductListPage from '@/pages/product/CategoryProductListPage.vue';
import UpdateMemberInfoComponent from '@/components/member/UpdateMemberInfoComponent';
import ProductReviewListComponent from '@/components/review/ProductReviewListComponent.vue';
import OrderListComponent from '@/components/order/OrderListComponent.vue';
import OrderDetailComponent from '@/components/order/OrderDetailComponent.vue';
import ReviewModalComponent from '@/components/review/ReviewModalComponent.vue';
import ReviewOfPurposeComponent from '@/components/review/ReviewOfPurposeComponent.vue';
import HashTagProductListPage from '@/pages/product/HashTagProductListPage.vue';
import WritableReviewComponent from '@/components/review/WritableReviewComponent.vue';
import WrittenReviewComponent from '@/components/review/WrittenReviewComponent.vue';
import myCouponListComponent from "@/components/coupon/myCouponListComponent.vue";
import eventCouponComponent from "@/components/coupon/eventCouponComponent.vue";
import ErrorComponent from "@/components/error/ErrorComponent.vue";
import NotFoundComponent from "@/components/error/NotFoundComponent.vue";
import StarComponent from "@/components/common/StarComponent.vue";
import axios from "axios";

const requireLogin = async (to, from, next) => {
    const memberStore = useMemberStore();

    if (memberStore.isLogined) {
        return next();
    }

    next({
        path: '/login',
        query: {redirect: to.fullPath},
    });
};

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // {path:"/test", component : TestCarousel},
        {
            path: '/mypage',
            component: MyPage, // 고정
            beforeEnter: requireLogin,
            children: [
                //========기본 페이지========
                {
                    path: '',
                    component: UpdateMemberInfoComponent,
                },
                //==========================
                {
                    path: 'favorite/likes',
                    name: 'likes',
                    component: MyFavoriteListComponent,
                    props: {initialTab: 0},
                },
                {
                    path: 'favorite/follow-artist',
                    name: 'follow-artist',
                    component: MyFavoriteListComponent,
                    props: {initialTab: 1},
                },
                {
                    path: 'favorite/recent-view',
                    name: 'recent-view',
                    component: MyFavoriteListComponent,
                    props: {initialTab: 2},
                },
                {
                    path: '/deliveryAddress',
                    name: 'deliveryAddress',
                    component: DeliveryComponent,
                },
                {path: '/grade', name: 'grade', component: GradeComponent},

                {
                    path: '/update/member-info',
                    name: 'update/member-info',
                    component: UpdateMemberInfoComponent,
                },

                {path: '/myCouponList', component: myCouponListComponent},
                {path: '/gift/give/list', component: GiftGiveList},
                {path: '/gift/give/detail', component: GiftGiveDetail},
                {path: '/gift/receive/list', component: GiftReceivedList},
                {path: '/gift/receive/detail', component: GiftReceivedDetail},
                {path: '/order-list', component: OrderListComponent},
                {path: '/order-Detail:orderIdx', component: OrderDetailComponent},
                {path: '/review-modal', component: ReviewModalComponent},
                {
                    path: '/review/writable',
                    name: 'writable',
                    component: ReviewOfPurposeComponent,
                    props: { initialTab: 0 },
                },
                {
                    path: '/review/written',
                    name: 'written',
                    component: ReviewOfPurposeComponent,
                    props: { initialTab: 1 },
                },
            ],
        },

        { path: '/written', component: WrittenReviewComponent },
        { path: '/writable', component: WritableReviewComponent },

        {path: '/', component: MainPage},

        //상품 리스트
        {
            name: 'categoryProductList',
            path: '/category/:categoryIdx',
            component: CategoryProductListPage,
        },
        {name: 'productList', path: '/search/:keyword', component: ProductList},
        {
            name: 'HashtagProductList',
            path: '/search/hashtag/:hashtagIdx',
            component: HashTagProductListPage,
        },

        // 장바구니, 구매, 선물
        {
            path: '/cart',
            name: 'Cart',
            component: CartComponent,
            beforeEnter: requireLogin,
            props: {pageType: 'cart'},
        },
        {
            path: '/cart/direct/:encryptedCartIdx',
            name: 'OrderPage',
            component: CartComponent,
            beforeEnter: requireLogin,
            props: (route) => ({
                pageType: 'order',
                encryptedCartIdx: route.params.encryptedCartIdx,
            }),
        },

        // 쿠폰
        {path: '/event/coupon', component: eventCouponComponent},


        {
            path: '/cart/gift/:encryptedCartIdx',
            name: 'GiftPage',
            component: CartComponent,
            beforeEnter: requireLogin,
            props: (route) => ({
                pageType: 'gift',
                encryptedCartIdx: route.params.encryptedCartIdx,
            }),
        },

        {path: '/order/payment', component: OrderPayment},
        {path: '/present/payment', component: PresentPayment},

        {
            name: 'productDetail',
            path: '/product-detail/:idx',
            component: ProductDetailPage,
        },
        {path: '/detail-payment', component: ProductDetailPayementComponent},

        {
            name: 'atelier',
            path: `/atelier/:idx`,
            component: AtelierPage,
            // children: [
            // { path: '', redirect: '/products' },
            // { path: '/products', component: AtelierProducts },
            // ],
        },
        {path: '/ask', component: AskCommentComponent},
        {path: '/review', name: 'review', component: ProductReviewListComponent},
        //member
        {path: '/login', component: LoginPage}, // 로그인 페이지
        {path: '/login-callback', component: LoginCallBackComponent}, // 소셜 로그인 콜백
        {path: '/logout', component: LogoutPage}, // 소셜 로그인 콜백
        {path: '/signup', component: SignupPage}, // 회원가입 페이지
        {path: '/member/find', component: EmailFindPage}, //회원 찾기 페이지

        //에러 페이지
        {path: '/error', component: ErrorComponent},
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: NotFoundComponent,
        },
        {
            path: '/notFound',
            name: 'notFound',
            component: NotFoundComponent,
        },
        {path: '/star', component: StarComponent},
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return {top: 0};
        }
    },
});

// 로컬 스토리지에는 남아있지만, 토큰은 사라진 상태 (로그아웃 처리)
router.beforeEach((to, from, next) => {
    const memberData = localStorage.getItem('member');
    const memberObject = JSON.parse(memberData);

    if (memberObject && memberObject.isLogined && (to.path !== "/logout")) {
        const url = "/api/member/hasCookie";
        axios.get(url)
    }
    next();
});

export default router;
