<template>
  <div data-v-6da505b4="">
    <div
      class="BaseSubHeader"
      style="
        --sub-header-padding-left: 0;
        --sub-header-padding-right: 0;
        --sub-header-min-height: 56;
      "
      data-v-b42a95d0=""
    >
      <!---->
      <div class="BaseSubHeader__contents" data-v-b42a95d0="">
        <!--[-->
        <span class="subtitle1_bold_small">후기({{ page.totalElements }})</span
        ><!--]-->
      </div>
      <div class="BaseSubHeader__append" data-v-b42a95d0="">
        <!--[-->
        <button
          type="default"
          class="CoreButton BaseButtonText body1-regular-small"
          style="
            background-color: transparent;
            color: #505fcd;
            height: 32px;
            flex-direction: row-reverse;
            --core-button-padding-x: 8;
            font-weight: bold;
          "
          data-v-524f63ea=""
          data-v-8493c3f2=""
        >
          <!----><!--[--><!---->
          <div
            class="inline-flex items-center"
            data-v-524f63ea=""
            @click="createReview"
          >
            <!--[--><!--]-->
            <span class="CoreButton__text" data-v-524f63ea="">후기 작성</span>
          </div>
          <!--]--></button
        ><!--]-->
      </div>
    </div>
    <!--[-->
    <div class="flex justify-center py-[16px]">
      <div
        class="BaseRating BaseRating__sizeText--xLarge width"
        style="--BaseRating-color: #333333; --BaseRating-gap: 2"
        data-v-2c82c531=""
      >
<!--        별점 컴포넌트-->
        <StarComponent :score="avgScore"/>
        <div class="BaseRating__label" data-v-2c82c531="">
          <div class="BaseRating__labelRate" data-v-2c82c531="">
            {{ avgScore }}
          </div>
          <!---->
        </div>
      </div>
    </div>
    <div data-v-595fd80b="">
      <div data-v-595fd80b="" class="body1-bold-medium mb-[8px]">
        사진 후기 ({{ reviewImageList.length }})
      </div>
      <div data-v-595fd80b="" class="flex pb-[20px]">
        <div
          data-v-595fd80b=""
          class="DesktopProductDetailPhotoReviewUnit__photoReviewWrapper auto"
          v-for="(image, index) in reviewImageList"
          :key="index"
        >
          <div
            data-v-24b1dfb3=""
            data-v-595fd80b=""
            class="BaseImage BaseImage__fixedWidth BaseImage__fixedHeight cursor-pointer"
            style="
              --BaseImage-width: 82;
              --BaseImage-height: 82;
              --BaseImage-radius: 2;
            "
          >
            <div
              data-v-24b1dfb3=""
              class="BaseImage__image"
              :style="`background-image: url(${image})`"
            >
              <img
                data-v-24b1dfb3=""
                :src="`${image}`"
                class="hidden"
                loading="lazy"
              />
            </div>
          </div>
          <!---->
        </div>
      </div>
      <!---->
    </div>
    <hr
      class="BaseDivider border-4"
      style="--border-color: #f5f5f5"
      data-v-6ef4cf18=""
    />
    <!--    <div class="flex items-center py-[8px]">&lt;!&ndash;[&ndash;&gt;-->
    <!--      <button data-v-524f63ea="" data-v-8493c3f2="" type="default"-->
    <!--                                                            class="CoreButton BaseButtonText body1-regular-small"-->
    <!--                                                            style="background-color: transparent; color: rgb(102, 102, 102); height: 32px; flex-direction: row-reverse; &#45;&#45;core-button-padding-x: 8;">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
    <!--      <div data-v-524f63ea="" class="inline-flex items-center"><span data-v-524f63ea=""-->
    <!--                                                                     class="CoreButton__text">최신 순</span></div>-->
    <!--    </button>-->
    <!--      <hr data-v-6ef4cf18="" class="BaseDivider w-[1px] !border-t-[14px]" style="&#45;&#45;border-color: #e1e1e1;">-->
    <!--      <button data-v-524f63ea="" data-v-8493c3f2="" type="default"-->
    <!--              class="CoreButton BaseButtonText body1-regular-small"-->
    <!--              style="background-color: transparent; color: rgb(51, 51, 51); height: 32px; flex-direction: row-reverse; &#45;&#45;core-button-padding-x: 8; font-weight: bold;">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
    <!--        <div data-v-524f63ea="" class="inline-flex items-center">-->
    <!--          <span data-v-524f63ea="" class="CoreButton__text">평점 높은 순</span>-->
    <!--        </div>-->
    <!--      </button>-->
    <!--      <hr data-v-6ef4cf18="" class="BaseDivider w-[1px] !border-t-[14px]" style="&#45;&#45;border-color: #e1e1e1;">-->
    <!--      <button data-v-524f63ea="" data-v-8493c3f2="" type="default"-->
    <!--              class="CoreButton BaseButtonText body1-regular-small"-->
    <!--              style="background-color: transparent; color: rgb(102, 102, 102); height: 32px; flex-direction: row-reverse; &#45;&#45;core-button-padding-x: 8;">&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;-->
    <!--        <div data-v-524f63ea="" class="inline-flex items-center"><span data-v-524f63ea=""-->
    <!--                                                                       class="CoreButton__text">평점 낮은 순</span></div>-->
    <!--      </button>&lt;!&ndash;&ndash;&gt;&lt;!&ndash;]&ndash;&gt;-->
    <!--    </div>-->
    <div>
      <!--[-->

      <!-- 리뷰 반복 -->
      <div
        v-for="review in reviewList"
        :key="review.reviewIdx"
        data-v-8316797e=""
        class="ReviewListItem margin-bottom-large"
      >
        <a data-v-8316797e="" rel="noopener noreferrer" class="cursor-pointer">
          <div
            data-v-8316797e=""
            class="ReviewListItem__profile display-flex margin-bottom"
          >
            <div
              data-v-2fc5c54e=""
              data-v-8316797e=""
              class="BaseAvatar"
              :style="`--BaseAvatar-image: url(${review.profileImage}); --BaseAvatar-size: 32;`"
            >
              <div data-v-2fc5c54e="" class="BaseAvatar__avatar">
                <div data-v-2fc5c54e="" class="BaseAvatar__avatarImage"></div>
              </div>
              <div
                data-v-8f163f81=""
                data-v-2fc5c54e=""
                class="CoreBadge BaseAvatar__iconDot"
                style="
                  --CoreBadge-color-background: #ef7014;
                  --CoreBadge-color-outline: #ffffff;
                  --CoreBadge-size: 6;
                  --CoreBadge-fontSize: 11;
                  --CoreBadge-offset-x: 0;
                  --CoreBadge-offset-y: 0;
                  --CoreBadge-position: relative;
                "
              >
                <!---->
              </div>
              <div
                data-v-8f163f81=""
                data-v-2fc5c54e=""
                class="CoreBadge CoreBadge__position--bottom BaseAvatar__iconCamera"
                style="
                  --CoreBadge-color-background: #000000;
                  --CoreBadge-color-outline: #ffffff;
                  --CoreBadge-size: 20;
                  --CoreBadge-fontSize: 11;
                  --CoreBadge-offset-x: 0;
                  --CoreBadge-offset-y: 0;
                  --CoreBadge-position: relative;
                "
              >
                <!---->
              </div>
            </div>
            <div data-v-8316797e="" class="ml-[8px]">
              <div data-v-8316797e="" class="body1_bold_small">
                {{ review.nickname }}
              </div>
<!--              별점 컴포넌트-->
              <div class="star-width star-flex">
                <StarComponent :score="review.score"/>
                <span>({{review.score}})</span>
              </div>
            </div>
          </div>
          <div
            data-v-8316797e=""
            class="ReviewListItem__review text-left display-flex margin-bottom"
          >
            <div
              data-v-f0e19541=""
              class="mr-[12px]"
              v-if="review.thumbnailImages"
            >
              <div
                data-v-24b1dfb3=""
                data-v-f0e19541=""
                class="BaseImage BaseImage__fixedWidth BaseImage__fixedHeight"
                style="
                  --BaseImage-width: 128;
                  --BaseImage-height: 128;
                  --BaseImage-radius: 2;
                "
              >
                <div
                  data-v-24b1dfb3=""
                  class="BaseImage__image"
                  :style="`background-image: url(&quot;${review.thumbnailImages}&quot;);`"
                >
                  <img
                    data-v-24b1dfb3=""
                    :src="`${review.thumbnailImages}`"
                    class="hidden"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div
              data-v-8316797e=""
              class="whitespace-pre-line body1-regular-medium line-clamp-6"
            >
              {{ review.content }}
            </div>
          </div>
          <div
            data-v-8316797e=""
            class="ReviewListItem__product gray-999--text text-left"
          >
            <div
              data-v-a1957620=""
              data-v-8316797e=""
              class="BaseDecorateText transform-gpu whitespace-pre-line inline"
            >
              <span
                data-v-a1957620=""
                class="DecorateText DecorateText--bold"
                style="
                  font-size: 12px;
                  color: rgb(153, 153, 153);
                  background-color: inherit;
                "
                >구매작품 :
              </span>
            </div>
            <div
              data-v-a1957620=""
              data-v-8316797e=""
              class="BaseDecorateText transform-gpu whitespace-pre-line inline"
            >
              <span
                data-v-a1957620=""
                class="DecorateText"
                style="
                  font-size: 12px;
                  color: rgb(153, 153, 153);
                  background-color: inherit;
                "
                >마리: 1마리 / 사진 유형: 전신이 다 나와있는 사진입니다 /
                배경색상: 작가님 선택에 맡길게요! / 배경이모티콘: 예쁘게
                꾸며주세요 / 무늬,소품,옷: 소품, 복잡한 무늬, 옷 이 있어요 /
                액자 선택: 디지털 파일만 받을께요</span
              >
            </div>
          </div>
        </a>
      </div>
      <hr
        data-v-6ef4cf18=""
        class="BaseDivider"
        style="--border-color: #f5f5f5"
      />
      <!--]-->
    </div>
    <!-- 리뷰 반복 끝  -->

    <!-- 페이지네이션 시작 -->
    <div class="py-[16px] px-[12px]">
      <div class="BasePagination" data-v-e5a5a8d6="">
        <!-- 이전 버튼 -->
        <button
          type="button"
          @click="fetchPage(page.number - 1)"
          :disabled="page.number === 0"
          class="CoreButton CoreButton--disabled BaseButtonIcon BasePagination__arrow mr-[8px]"
          style="
            background-color: transparent;
            height: 32px;
            flex-direction: column;
            --core-button-padding-x: 4;
          "
          data-v-524f63ea=""
          data-v-778c1d9b=""
          data-v-e5a5a8d6=""
        >
          <!----><!--[-->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style="
              width: 24px;
              height: 24px;
              opacity: 1;
              fill: currentColor;
              --BaseIcon-color: #333333;
              margin-bottom: 0px;
            "
            class="BaseIcon CoreButton__icon"
            data-v-6d2bd019=""
            data-v-524f63ea=""
          >
            <g clip-path="url(#clip0_124_2946)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.4697 5.46973L15.5303 6.53039L10.061 12.0001L15.5303 17.4697L14.4697 18.5304L8.46967 12.5304C8.2034 12.2641 8.1792 11.8475 8.39705 11.5538L8.46967 11.4697L14.4697 5.46973Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_124_2946">
                <rect width="24" height="24"></rect>
              </clipPath>
            </defs>
          </svg>
          <div class="inline-flex items-center" data-v-524f63ea="">
            <!--[--><!--]--><!---->
          </div>
          <!--]-->
        </button>

        <div class="BasePagination__pages" data-v-e5a5a8d6="">
          <!-- 동적 페이지 번호 -->
          <div
            v-for="n in filteredPages"
            :key="n"
            class="BasePaginationItem BasePagination__item"
            :class="{ 'BasePaginationItem--active': n - 1 === page.number }"
            @click="fetchPage(n - 1)"
          >
            <div class="BasePaginationItem__item BasePaginationItem__number">
              {{ n }}
            </div>
          </div>
        </div>
        <!-- 다음 버튼 -->

        <button
          @click="fetchPage(page.number + 1)"
          :disabled="page.number >= page.totalPages - 1"
          type="button"
          class="CoreButton CoreButton--disabled BaseButtonIcon BasePagination__arrow ml-[8px]"
          style="
            background-color: transparent;
            height: 32px;
            flex-direction: column;
            --core-button-padding-x: 4;
          "
          data-v-524f63ea=""
          data-v-778c1d9b=""
          data-v-e5a5a8d6=""
        >
          <!----><!--[-->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            style="
              width: 24px;
              height: 24px;
              opacity: 1;
              fill: currentColor;
              --BaseIcon-color: #333333;
              margin-bottom: 0px;
            "
            class="BaseIcon CoreButton__icon"
            data-v-6d2bd019=""
            data-v-524f63ea=""
          >
            <g clip-path="url(#clip0_124_2947)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.53039 5.46973L15.5304 11.4697C15.7967 11.736 15.8209 12.1527 15.603 12.4463L15.5304 12.5304L9.53039 18.5304L8.46973 17.4697L13.9391 12.0001L8.46973 6.53039L9.53039 5.46973Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_124_2947">
                <rect width="24" height="24"></rect>
              </clipPath>
            </defs>
          </svg>
          <div class="inline-flex items-center" data-v-524f63ea="">
            <!--[--><!--]--><!---->
          </div>
          <!--]-->
        </button>
      </div>
      <!--]--><!---->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useReviewStore } from "@/stores/useReviewStore";
import { useOrderStore } from "@/stores/useOrderStore";
import { useRoute } from "vue-router";
import swal from 'sweetalert2';

import StarComponent from "@/components/common/StarComponent.vue";

export default {
  name: "ProductReviewListComponent",

  data() {
    return {
      productIdx: null,
    };
  },
  components:{
    StarComponent
  },
  computed: {
    ...mapState(useReviewStore, [
      "reviewList",
      "reviewImageList",
      "page",
      "avgScore",
    ]),
    filteredPages() {
      const pages = [];
      const { number, totalPages } = this.page;
      if (totalPages <= 5) {
        for (let n = 1; n <= totalPages; n++) {
          pages.push(n);
        }
      } else if (number <= 5) {
        for (let n = 1; n <= 7; n++) {
          // 1 2 3 4 5 6 7
          pages.push(n);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (number > 5 && number <= totalPages - 3) {
        pages.push(1);
        pages.push("...");

        for (let n = number - 2; n <= number + 2; n++) {
          pages.push(n);
        }
        pages.push("...");
        pages.push(totalPages);
      } else {
        pages.push(1);
        pages.push("...");

        for (let n = totalPages - 5; n <= totalPages; n++) {
          pages.push(n);
        }
      }
      return pages;
    },
  },
  methods: {
    showAlert(content) {
      swal.fire({
        title: "Oops!",
        text: content,
        icon: "error",
      });
    },
    ...mapActions(useReviewStore, ["fetchReviews"]),
    fetchPage(page, size = 10) {
      this.fetchReviews(this.productIdx, page, size);
    },
    ...mapActions(useOrderStore, ["isOrdered"]),
    async createReview() {
      let response = await this.isOrdered(this.productIdx);
      if (response.isWritable === true) {
        window.location.href = "/review/writable";
      } else {
        this.showAlert(response.comment);
      }
    },
  },

  watch: {
    productIdx() {
      this.fetchPage(0, 10);
    },
  },

  beforeMount() {
    const route = useRoute();
    this.productIdx = route.params.idx;
    this.fetchPage(0);
  },
};
</script>

<style scoped>
.BasePagination {
  display: flex;
  align-items: center;
}

.BasePagination__button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  font-size: 16px;
  color: #666;
}

.BasePagination__button:disabled {
  cursor: not-allowed;
  color: #ccc;
}

.BasePaginationItem {
  cursor: pointer;
  padding: 8px;
  font-size: 16px;
}

.BasePaginationItem--active {
  font-weight: bold;
  color: #000;
}

.display-flex {
  display: flex;
}

.text-left {
  text-align: left;
}

.margin-bottom-large {
  margin-bottom: 20px;
}

.flex {
  gap: 5px;
}
.display-flex {
  display: flex;
}
.margin-bottom {
  margin-bottom: 10px;
}
.width{
  width: 200px;
}
.star-width{
  width: 62px;
}
.star-flex{
  display: flex;
}
.star-flex span{
  margin-left: 3px;
  color: #444444;
}
</style>