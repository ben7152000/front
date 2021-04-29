<template>
    <div class="section-padding fix">
        <div class="container">
            <SectionTitle
                title="相關裝備租借"
                sub-title="擁有齊全、安全、專業的裝備，應有盡有"
                add-class-name="mb-60"
            />
            <div
                class="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30 justify-content-center"
                data-aos="fade-up"
            >
                <div
                    class="col mt-30"
                    v-for="(equipment, index) in equipments"
                    :key="index"
                >
                    <EquipmentDetailCard
                        :title="equipment.title"
                        :image="equipment.image"
                        :price="equipment.price"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SectionTitle from "@/components/SectionTitle";
import EquipmentDetailCard from "@/components/EquipmentDetailCard";

export default {
    head() {
        return {
            title: "Equipment-Detail"
        };
    },
    props: ["addClassName", "equipments"],
    components: {
        SectionTitle,
        EquipmentDetailCard,
    }
};
</script>
